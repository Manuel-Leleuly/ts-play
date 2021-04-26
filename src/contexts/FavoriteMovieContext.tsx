import React, { createContext, useEffect, useState } from "react";
import { baseMovieData, INFO, REQUESTS } from "../shared/Constants";
import {
  addOrRemoveFavoriteMovie,
  clearFavoriteMovie,
  fetchMovies,
} from "../shared/API";
import { MovieData, SetBoolean, SetPopUpMessage } from "../shared/Types";

export type FavoriteMovieContent = {
  favoriteMoviesData: MovieData;
  isMovieInFavorite: (
    movieId: number,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => boolean;
  handleFavoriteMovie: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    movieId: number,
    setPopupMessage: SetPopUpMessage,
    setIsLoading: SetBoolean
  ) => void;
  removeAllFavoriteMovie: (
    a: SetBoolean,
    b: SetBoolean,
    c: SetPopUpMessage
  ) => void;
};

export const FavoriteMovieContext = createContext<FavoriteMovieContent>({
  favoriteMoviesData: baseMovieData,
  isMovieInFavorite: (
    movieId: number,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => false,
  handleFavoriteMovie: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    movieId: number,
    setPopupMessage: SetPopUpMessage,
    setIsLoading: SetBoolean
  ) => {},
  removeAllFavoriteMovie: (
    a: SetBoolean,
    b: SetBoolean,
    c: SetPopUpMessage
  ) => {},
});

export const FavoriteMovieProvider: React.FC = ({ children }) => {
  const [favoriteMoviesData, setFavoriteMoviesData] = useState<MovieData>(
    baseMovieData
  );

  const getFavoriteMovieList = `${REQUESTS.SHOW_FAVORITES}`;

  useEffect(() => {
    fetchMovies(
      getFavoriteMovieList,
      favoriteMoviesData,
      setFavoriteMoviesData,
      true
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isMovieInFavorite = (
    movieId: number,
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (event) {
      event.preventDefault();
    }
    return (
      favoriteMoviesData.movies.filter(
        (favoriteMovie) => favoriteMovie.id === movieId
      ).length > 0
    );
  };

  const handleFavoriteMovie = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    movieId: number,
    setPopupMessage: SetPopUpMessage,
    setIsLoading: SetBoolean
  ) => {
    setIsLoading(true);
    const add = !isMovieInFavorite(movieId, event);
    if (add && favoriteMoviesData.movies.length >= 20) {
      setPopupMessage({
        message: INFO.LIMIT_FAVORITE_MOVIE,
        isError: true,
        isHidden: false,
      });
      setIsLoading(false);
      return;
    }
    addOrRemoveFavoriteMovie(
      movieId,
      add,
      getFavoriteMovieList,
      favoriteMoviesData,
      setFavoriteMoviesData,
      setPopupMessage,
      setIsLoading
    );
  };

  const removeAllFavoriteMovie = (
    setLoading: SetBoolean,
    setShowModal: SetBoolean,
    setPopupMessage: SetPopUpMessage
  ) => {
    Promise.all(
      favoriteMoviesData.movies.map(async (movie) => {
        await clearFavoriteMovie(movie.id);
      })
    )
      .then(async () => {
        await fetchMovies(
          getFavoriteMovieList,
          favoriteMoviesData,
          setFavoriteMoviesData
        );
        setLoading(false);
        setShowModal(false);
        setPopupMessage({
          message: INFO.CLEAR_ALL_MOVIES_FROM_FAVORITES,
          isError: false,
          isHidden: false,
        });
        document.body.setAttribute("style", ``);
      })
      .catch((error) => {
        setFavoriteMoviesData({
          ...favoriteMoviesData,
          apiInfo: {
            ...favoriteMoviesData.apiInfo,
            error: error.message,
          },
        });
        setLoading(false);
        setShowModal(false);
        document.body.setAttribute("style", ``);
      });
  };

  const value = {
    favoriteMoviesData,
    isMovieInFavorite,
    handleFavoriteMovie,
    removeAllFavoriteMovie,
  };

  return (
    <FavoriteMovieContext.Provider value={value}>
      {children}
    </FavoriteMovieContext.Provider>
  );
};
