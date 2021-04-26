import React, { useEffect, useState } from "react";
import {
  baseMovieData,
  MOVIE,
  REQUESTS,
  TEXT_ALIGN,
} from "../../shared/Constants";
import { fetchMovies } from "../../shared/API";
import { MovieData } from "../../shared/Types";
import Bars from "./Bars";
import NowPlayingCard from "./NowPlayingCard";
import LoadingAnimation from "../Global/LoadingAnimation";
import ConnectionErrorText from "../Global/ConnectionErrorText";

const Carousel = () => {
  const [nowPlayingData, setNowPlayingData] = useState<MovieData>(
    baseMovieData
  );

  useEffect(() => {
    const getNowPlayingMovieList = REQUESTS.NOW_PLAYING;
    fetchMovies(getNowPlayingMovieList, nowPlayingData, setNowPlayingData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { movies, apiInfo } = nowPlayingData;
  const countMovieShown = MOVIE.MOVIE_SHOWN;

  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      const newCarouselIndex =
        carouselIndex === countMovieShown - 1 ? 0 : carouselIndex + 1;
      setCarouselIndex(newCarouselIndex);
    }, 10000);
    return () => clearInterval(timer);
  });

  const bars = new Array(countMovieShown).fill(0);

  return (
    <div className="relative">
      {nowPlayingData.apiInfo.error ? (
        <div className="w-full h-accel-carousel-mobile flex flex-row items-center">
          <ConnectionErrorText
            errorMessage={apiInfo.error}
            textAlignment={TEXT_ALIGN.CENTER}
          />
        </div>
      ) : nowPlayingData.apiInfo.isLoading ? (
        <div className="w-full h-accel-carousel-mobile flex flex-row items-center justify-center top-1/2 transform  relative">
          <LoadingAnimation size={10} />
        </div>
      ) : (
        movies
          .filter((movie, idx) => idx === carouselIndex)
          .map((nowPlayingMovie) => {
            return (
              <NowPlayingCard
                key={nowPlayingMovie.id}
                nowPlayingMovie={nowPlayingMovie}
              />
            );
          })
      )}
      <div className="absolute bottom-12 left-10 flex flex-row justify-start">
        {!nowPlayingData.apiInfo.error &&
          bars.map((bar, idx) => {
            return (
              <Bars key={idx} keyValue={idx} carouselIndex={carouselIndex} />
            );
          })}
      </div>
    </div>
  );
};
export default Carousel;
