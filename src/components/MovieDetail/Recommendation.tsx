import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  API,
  baseMovieData,
  DATA_ERROR,
  TEXT_ALIGN,
} from "../../shared/Constants";
import { MovieData, Params } from "../../shared/Types";
import MovieCard from "../Global/MovieCard";
import SeeAll from "./SeeAll";
import DataErrorText from "../Global/DataErrorText";
import LoadingAnimation from "../Global/LoadingAnimation";
import { fetchMovies } from "../../shared/API";
import ConnectionErrorText from "../Global/ConnectionErrorText";

export type RecommendationType = React.FC<{
  movieId: number | undefined;
}>;

const Recommendation: RecommendationType = () => {
  const params: Params = useParams();
  const movieId = params.movieId;
  const [recommendedMovies, setRecommendedMovies] = useState<MovieData>(
    baseMovieData
  );
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(6);

  const getMovieRecommendation = `${API.BASE_URL}/movie/${movieId}/recommendations?api_key=${API.API_KEY}&language=en-US&page=${page}`;

  useEffect(() => {
    setRecommendedMovies({
      ...recommendedMovies,
      apiInfo: {
        ...recommendedMovies.apiInfo,
        isLoading: true,
      },
    });
    setFilter(6);
    setPage(1);
    fetchMovies(
      getMovieRecommendation,
      recommendedMovies,
      setRecommendedMovies,
      true
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  useEffect(() => {
    setRecommendedMovies({
      ...recommendedMovies,
      apiInfo: {
        ...recommendedMovies.apiInfo,
        isLoading: true,
      },
    });
    fetchMovies(
      getMovieRecommendation,
      recommendedMovies,
      setRecommendedMovies,
      false
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <p className="capitalize text-lg font-medium mb-6 mt-15">
        recommendation
      </p>
      {recommendedMovies.apiInfo.error ? (
        <div className="flex flex-row justify-center relative">
          <ConnectionErrorText
            errorMessage={recommendedMovies.apiInfo.error}
            textAlignment={TEXT_ALIGN.CENTER}
          />
        </div>
      ) : recommendedMovies.movies.length !== 0 ? (
        <div className="pt-5 grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-5 grid-cols-2 gap-2">
          {recommendedMovies.movies
            .filter((movie, idx) => idx < filter)
            .map((movie) => {
              return (
                <Link to={`/movie/${movie.id}`} key={movie.id}>
                  <MovieCard key={movie.id} movie={movie} />
                </Link>
              );
            })}
        </div>
      ) : recommendedMovies.apiInfo.isLoading ? (
        <div className="flex flex-row justify-center relative">
          <LoadingAnimation size={10} />
        </div>
      ) : (
        <div className="flex flex-row justify-center relative">
          <DataErrorText
            dataError={DATA_ERROR.RECOMMENDATION}
            textAlignment={TEXT_ALIGN.CENTER}
          />
        </div>
      )}
      {!recommendedMovies.apiInfo.error && (
        <div className="mt-10 flex flex-row justify-center items-center">
          <SeeAll
            filter={filter}
            setFilter={setFilter}
            page={page}
            setPage={setPage}
            isLoading={recommendedMovies.apiInfo.isLoading}
            totalPages={recommendedMovies.total_pages}
          />
        </div>
      )}
    </>
  );
};
export default Recommendation;
