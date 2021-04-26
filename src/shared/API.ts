import {
  APIInfo,
  CastAndCrewData,
  GenreData,
  MovieData,
  MovieDetailData,
  SetBoolean,
  SetCastAndCrewData,
  SetGenreData,
  SetMovieData,
  SetMovieDetailData,
  SetPopUpMessage,
} from "./Types";
import axios from "axios";
import { INFO, REQUESTS } from "./Constants";

export const baseApiInfo: APIInfo = {
  isLoading: true,
  status: 0,
  statusText: "",
  error: "",
};

// GET
export const fetchGenre = async (
  getGenreList: string,
  genreData: GenreData,
  setGenreData: SetGenreData
) => {
  const request = await axios
    .get(getGenreList)
    .then((res) => {
      setGenreData({
        ...genreData,
        genres: res.data.genres,
        apiInfo: {
          ...genreData.apiInfo,
          isLoading: false,
          status: res.status,
          statusText: res.statusText,
        },
      });
    })
    .catch((error) => {
      setGenreData({
        ...genreData,
        apiInfo: {
          ...genreData.apiInfo,
          error: error.message,
        },
      });
    });
  return request;
};

export const fetchMovies = async (
  queryUrl: string,
  movieData: MovieData,
  setMovieData: SetMovieData,
  refreshData?: boolean
) => {
  if (!queryUrl) throw new Error("data failed to be fetch");
  const request = await axios
    .get(queryUrl)
    .then((res) => {
      setMovieData({
        ...movieData,
        page: res.data.page,
        movies:
          refreshData === true || refreshData === undefined
            ? res.data.results
            : [...movieData.movies, ...res.data.results],
        apiInfo: {
          ...movieData.apiInfo,
          isLoading: false,
          status: res.status,
          statusText: res.statusText,
        },
        total_pages: res.data.total_pages,
        total_results: res.data.total_results,
      });
    })
    .catch((error) => {
      setMovieData({
        ...movieData,
        apiInfo: {
          ...movieData.apiInfo,
          error: error.message,
        },
      });
    });
  return request;
};

export const fetchMovieDetail = async (
  query: string,
  movieDetail: MovieDetailData,
  setMovieDetail: SetMovieDetailData
) => {
  const request = await axios
    .get(query)
    .then((res) => {
      setMovieDetail({
        movie: res.data,
        apiInfo: {
          ...movieDetail.apiInfo,
          isLoading: false,
          status: res.status,
          statusText: res.statusText,
        },
      });
    })
    .catch((error) => {
      console.dir(error);
      setMovieDetail({
        ...movieDetail,
        apiInfo: {
          ...movieDetail.apiInfo,
          error: error.message,
        },
      });
    });
  return request;
};

export const fetchCastAndCrew = async (
  query: string,
  castAndCrewData: CastAndCrewData,
  setCastAndCrewData: SetCastAndCrewData
) => {
  const request = await axios
    .get(query)
    .then((res) => {
      setCastAndCrewData({
        casts: res.data.cast,
        crews: res.data.crew,
        apiInfo: {
          ...castAndCrewData.apiInfo,
          isLoading: false,
          status: res.status,
          statusText: res.statusText,
        },
      });
    })
    .catch((error) => {
      setCastAndCrewData({
        ...castAndCrewData,
        apiInfo: {
          ...castAndCrewData.apiInfo,
          error: error.message,
        },
      });
    });
  return request;
};

// POST
export const addOrRemoveFavoriteMovie = async (
  movieId: number,
  isAdd: boolean,
  getQuery: string,
  movieData: MovieData,
  setMovieData: SetMovieData,
  setPopupMessage: SetPopUpMessage,
  setIsLoading: SetBoolean
) => {
  const query = REQUESTS.ADD_REMOVE_FAVORITES;
  const request = await axios
    .post(
      query,
      {
        media_type: "movie",
        media_id: movieId,
        favorite: isAdd,
      },
      {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
    .then(async (res) => {
      await fetchMovies(getQuery, movieData, setMovieData);
      const info = isAdd
        ? INFO.MOVIE_ADDED_TO_FAVORITES
        : INFO.MOVIE_REMOVED_FROM_FAVORITES;
      setPopupMessage({
        message: info,
        isError: false,
        isHidden: false,
      });
      setIsLoading(false);
    })
    .catch((error) => {
      setPopupMessage({
        message: error.message,
        isError: true,
        isHidden: false,
      });
      setIsLoading(false);
    });
  return request;
};

export const clearFavoriteMovie = async (movieId: number) => {
  const query = REQUESTS.ADD_REMOVE_FAVORITES;
  const request = await axios
    .post(
      query,
      {
        media_type: "movie",
        media_id: movieId,
        favorite: false,
      },
      {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      }
    )
    .catch((error) => {
      console.dir(error);
    });
  return request;
};
