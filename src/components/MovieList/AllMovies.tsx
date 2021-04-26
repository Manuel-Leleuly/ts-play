import React, { useEffect, useState } from "react";
import { MovieData } from "../../shared/Types";
import MovieCard from "../Global/MovieCard";
import {
  baseMovieData,
  GENRE,
  REQUESTS,
  TEXT_ALIGN,
  YEAR,
} from "../../shared/Constants";
import { fetchMovies } from "../../shared/API";
import { Link } from "react-router-dom";
import LoadingAnimation from "../Global/LoadingAnimation";
import ConnectionErrorText from "../Global/ConnectionErrorText";

type AllMoviesType = React.FC<{
  genreSelected: number;
  yearSelected: number;
}>;

const AllMovies: AllMoviesType = (props) => {
  const { genreSelected, yearSelected } = props;
  const [allMoviesData, setAllMoviesData] = useState<MovieData>(baseMovieData);
  const [loadMore, setLoadMore] = useState(false);

  const genreQuery =
    genreSelected === GENRE.ALL_GENRE ? "" : `&with_genres=${genreSelected}`;
  const yearQuery =
    yearSelected === YEAR.ALL_YEAR
      ? ""
      : `&primary_release_year=${yearSelected}`;

  const [page, setPage] = useState(1); // used for 'load more' button
  const pageLimit = 10; // set the page limit for movies
  const getAllMovies = `${REQUESTS.MOVIE_LIST}${page}${genreQuery}${yearQuery}`;

  const loadMoreMovies = async () => {
    await fetchMovies(getAllMovies, allMoviesData, setAllMoviesData, false);
    setLoadMore(false);
  };

  useEffect(() => {
    if (page > pageLimit) {
      return;
    }
    loadMoreMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setAllMoviesData(baseMovieData);
    setPage(1);
    fetchMovies(getAllMovies, allMoviesData, setAllMoviesData, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genreQuery, yearQuery]);

  return (
    <>
      {allMoviesData.apiInfo.error ? (
        <div className="flex flex-row flex-wrap justify-between relative pt-5">
          <ConnectionErrorText
            errorMessage={allMoviesData.apiInfo.error}
            textAlignment={TEXT_ALIGN.CENTER}
          />
        </div>
      ) : allMoviesData.apiInfo.isLoading &&
        allMoviesData.movies.length === 0 ? (
        <div className="flex flex-row flex-wrap justify-between relative pt-5">
          <div className="mx-auto">
            <LoadingAnimation size={10} />
          </div>
        </div>
      ) : (
        <div className="pt-5 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-5 grid-cols-2 gap-2">
          {allMoviesData.movies.map((movie) => {
            return (
              <Link key={movie.id} to={`/movie/${movie.id}`}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            );
          })}
        </div>
      )}
      <div className="w-full flex flex-row justify-center">
        <button
          className={`focus:outline-none mt-20 mx-auto mb-22 py-3 px-6 border border-accel-global-grey-light-4 dark:border-white rounded ${
            allMoviesData.movies.length <= 0 ? "hidden" : ""
          } ${page > pageLimit ? "hidden" : ""}`}
          onClick={() => {
            setPage(page + 1);
            setLoadMore(true);
          }}
          disabled={page > pageLimit}
        >
          <p className="capitalize">
            {loadMore
              ? "loading..."
              : page > pageLimit
              ? "no more movies"
              : "load more"}
          </p>
        </button>
      </div>
    </>
  );
};
export default AllMovies;
