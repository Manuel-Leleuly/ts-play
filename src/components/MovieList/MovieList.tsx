import React, { useState } from "react";
import AllMovies from "./AllMovies";
import Categories from "./Categories";

const MovieList = () => {
  const [genreSelected, setGenreSelected] = useState(0);
  const [yearSelected, setYearSelected] = useState(0);

  return (
    <div className="px-9">
      <Categories
        setGenreSelected={setGenreSelected}
        setYearSelected={setYearSelected}
      />
      <AllMovies genreSelected={genreSelected} yearSelected={yearSelected} />
    </div>
  );
};
export default MovieList;
