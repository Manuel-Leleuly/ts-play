import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoriteMovieContext } from "../../contexts/FavoriteMovieContext";
import { DATA_ERROR, GENRE, TEXT_ALIGN, YEAR } from "../../shared/Constants";
import ConnectionErrorText from "../Global/ConnectionErrorText";
import DataErrorText from "../Global/DataErrorText";
import LoadingAnimation from "../Global/LoadingAnimation";
import MovieCard from "../Global/MovieCard";

type FavoriteMoviesType = React.FC<{
  genreSelected: number;
  yearSelected: number;
}>;

const FavoriteMovies: FavoriteMoviesType = ({
  genreSelected,
  yearSelected,
}) => {
  const { favoriteMoviesData } = useContext(FavoriteMovieContext);

  return (
    <div>
      {favoriteMoviesData.apiInfo.error ? (
        <div className="flex flex-row flex-wrap justify-center relative">
          <ConnectionErrorText
            errorMessage={favoriteMoviesData.apiInfo.error}
            textAlignment={TEXT_ALIGN.CENTER}
          />
        </div>
      ) : favoriteMoviesData.apiInfo.isLoading ? (
        <div className="flex flex-row flex-wrap justify-center relative">
          <LoadingAnimation size={10} />
        </div>
      ) : favoriteMoviesData.movies.length === 0 ? (
        <div className="flex flex-row flex-wrap justify-center relative">
          <DataErrorText
            dataError={DATA_ERROR.FAVORITE}
            textAlignment={TEXT_ALIGN.CENTER}
          />
        </div>
      ) : (
        <div className="pt-5 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-5 grid-cols-2 gap-2">
          {favoriteMoviesData.movies
            .filter(
              (movie) =>
                movie.genre_ids?.includes(genreSelected) ||
                genreSelected === GENRE.ALL_GENRE
            )
            .filter(
              (movie) =>
                movie.release_date.includes(yearSelected.toString()) ||
                yearSelected === YEAR.ALL_YEAR
            )
            .map((movie) => {
              return (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <MovieCard key={movie.id} movie={movie} />
                </Link>
              );
            })}
        </div>
      )}
    </div>
  );
};
export default FavoriteMovies;
