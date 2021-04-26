import React, { useState } from "react";
import { MovieData } from "../../../shared/Types";
import MovieSearchBar from "../global/MovieSearchBar";
import DesktopSearchResult from "./DesktopSearchResult";

type DesktopSearchType = React.FC<{
  movieData: MovieData;
}>;

const DesktopSearch: DesktopSearchType = (props) => {
  const { movieData } = props;
  const [searchIsFocus, setSearchIsFocus] = useState(false);

  return (
    <React.Fragment>
      <MovieSearchBar
        searchIsFocus={searchIsFocus}
        setSearchIsFocus={setSearchIsFocus}
      />
      <DesktopSearchResult
        movieData={movieData}
        searchIsFocus={searchIsFocus}
      />
    </React.Fragment>
  );
};

export default DesktopSearch;
