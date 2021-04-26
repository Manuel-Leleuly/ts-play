import React, { useEffect, useState } from "react";
import { GenreProvider } from "../../contexts/GenreContext";
import { API } from "../../shared/Constants";
import { baseApiInfo, fetchMovieDetail } from "../../shared/API";
import { MovieDetailData, Params } from "../../shared/Types";
import MovieDetailContent from "./MovieDetailContent";
import MovieDetailHeader from "./MovieDetailHeader";
import { useParams } from "react-router-dom";

const MovieDetailComponent = () => {
  const params: Params = useParams();
  const [movieDetail, setMovieDetail] = useState<MovieDetailData>({
    movie: null,
    apiInfo: baseApiInfo,
  });

  useEffect(() => {
    setMovieDetail({
      ...movieDetail,
      apiInfo: {
        ...movieDetail.apiInfo,
        isLoading: true,
      },
    });
    const getFavoriteMovie = `${API.BASE_URL}/movie/${params.movieId}?api_key=${API.API_KEY}&language=en-US&append_to_response=videos`;
    fetchMovieDetail(getFavoriteMovie, movieDetail, setMovieDetail);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.movieId]);

  return (
    <GenreProvider>
      <div className="content w-full h-full min-h-screen pt-16 bg-white dark:bg-accel-body-dark text-accel-global-grey-light-2 dark:text-white">
        <MovieDetailHeader movieDetail={movieDetail} />
        <MovieDetailContent movieDetail={movieDetail.movie} />
      </div>
    </GenreProvider>
  );
};
export default MovieDetailComponent;
