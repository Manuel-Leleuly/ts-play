import React from "react";
import { GenreProvider } from "../../contexts/GenreContext";
import Carousel from "./Carousel";
import MovieList from "./MovieList";

const Main = React.memo(() => {
  return (
    <GenreProvider>
      <div className="content w-full h-full min-h-accel-body pt-16 bg-white dark:bg-accel-body-dark text-accel-global-grey-light-2 dark:text-white">
        <Carousel />
        <MovieList />
      </div>
    </GenreProvider>
  );
});
export default Main;
