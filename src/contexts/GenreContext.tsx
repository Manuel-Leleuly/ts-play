import React, { createContext, useEffect, useState } from "react";
import { REQUESTS } from "../shared/Constants";
import { baseApiInfo, fetchGenre } from "../shared/API";
import { GenreData } from "../shared/Types";

export type GenreContent = {
  genreData: GenreData;
};

export const GenreContext = createContext<GenreContent>({
  genreData: {
    genres: [],
    apiInfo: baseApiInfo,
  },
});

export const GenreProvider: React.FC = ({ children }) => {
  const [genreData, setGenreData] = useState<GenreData>({
    genres: [],
    apiInfo: baseApiInfo,
  });

  useEffect(() => {
    const getGenreList = REQUESTS.GENRE_MOVIE;
    fetchGenre(getGenreList, genreData, setGenreData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = { genreData };

  return (
    <GenreContext.Provider value={value}>{children}</GenreContext.Provider>
  );
};
