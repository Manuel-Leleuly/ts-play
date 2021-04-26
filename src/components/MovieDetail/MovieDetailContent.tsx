import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { BACKDROP_SIZE, VIDEO_TYPE } from "../../shared/Constants";
import { MovieDetail } from "../../shared/Types";
import { getImage, getVideo } from "../../shared/Utils";
import Cast from "./Cast";
import Recommendation from "./Recommendation";
import Trailer from "./Trailer";

type MovieDetailContentType = React.FC<{
  movieDetail: MovieDetail | null;
}>;

const MovieDetailContent: MovieDetailContentType = ({ movieDetail }) => {
  const [trailerBackdrop, setTrailerBackdrop] = useState<string | null>(null);
  useEffect(() => {
    if (movieDetail) {
      setTrailerBackdrop(
        getImage(BACKDROP_SIZE.W300, movieDetail.backdrop_path, true)
      );
    }
  }, [movieDetail]);

  const trailerUrl = getVideo(movieDetail?.videos.results, VIDEO_TYPE.TRAILER);

  return (
    <div className="bg-white dark:bg-accel-body-dark p-10 text-black dark:text-white">
      <Grid container spacing={10}>
        <Grid item md={8} sm={12} xs={12}>
          <p className="capitalize text-lg font-medium mb-5">synopsis</p>
          <Trailer trailerBackdrop={trailerBackdrop} trailerUrl={trailerUrl} />
          <div className="w-full mt-10 mb-10 text-base max-w-synopsis">
            <p>{movieDetail?.overview}</p>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Cast />
        </Grid>
      </Grid>
      <Recommendation movieId={movieDetail?.id} />
    </div>
  );
};
export default MovieDetailContent;
