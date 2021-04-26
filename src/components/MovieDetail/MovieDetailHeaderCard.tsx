import React, { useContext, useEffect, useState } from "react";
import { MovieDetail, SetPopUpMessage } from "../../shared/Types";
import { GenreContext } from "../../contexts/GenreContext";
import AddToFavorites from "../MovieList/AddToFavorites";
import Rate from "./Rate";
import { BACKDROP_SIZE } from "../../shared/Constants";
import GenreText from "../Global/GenreText";
import { getImage, getYear } from "../../shared/Utils";
import HeaderBackdrop from "../Global/HeaderBackdrop";

type MovieDetailHeaderCardType = React.FC<{
  movie: MovieDetail | null;
  setPopupMessage: SetPopUpMessage;
}>;

const MovieDetailHeaderCard: MovieDetailHeaderCardType = ({
  movie,
  setPopupMessage,
}) => {
  const countGenreShow = 3;
  const { genreData } = useContext(GenreContext);

  const [movieDetail, setMovieDetail] = useState<{
    backdrop: string | null;
    year: string | null;
    movieId: number;
    rating: number;
  }>({
    backdrop: null,
    year: null,
    movieId: 0,
    rating: 0,
  });

  useEffect(() => {
    if (movie) {
      setMovieDetail({
        backdrop: getImage(BACKDROP_SIZE.w1280, movie?.backdrop_path, true),
        year: getYear(movie.release_date),
        movieId: movie.id,
        rating: movie.vote_average / 2,
      });
    }
  }, [movie]);

  const { backdrop, year, rating, movieId } = movieDetail;

  return (
    <div className="relative px-9 pt-30 pb-8 poster overflow-hidden h-accel-carousel-mobile text-white bg-black">
      <HeaderBackdrop backdropUrl={backdrop} />
      <div className="absolute z-10">
        <p className="text-2xl font-normal mb-2">{year}</p>
        <p className="capitalize text-6xl mb-5.5 ellipsis line-clamp-1">
          {movie?.title}
        </p>
        <Rate rating={rating} />
        <div className="mb-11 flex flex-row justify-start items-center">
          {movie?.genres
            .filter((movieGenre, idx) => idx < countGenreShow)
            .map((movieGenre) => {
              return genreData.genres.map((genre) => {
                if (movieGenre.id === genre.id) {
                  return (
                    <GenreText
                      key={genre.id}
                      genreName={genre.name}
                      isHeader={true}
                    />
                  );
                }
                return null;
              });
            })}
        </div>
        <div className="flex flex-row justify-start item-center w-full">
          <button className="capitalize text-2xl btn btn--blue px-16 py-3 mr-4">
            play now
          </button>
          <AddToFavorites
            movieId={movieId}
            setPopupMessage={setPopupMessage}
            isHeader={true}
          />
        </div>
      </div>
    </div>
  );
};
export default MovieDetailHeaderCard;
