import React from "react";
import * as H from "history";

export type SetString = React.Dispatch<React.SetStateAction<string>>;
export type SetBoolean = React.Dispatch<React.SetStateAction<boolean>>;
export type SetNumber = React.Dispatch<React.SetStateAction<number>>;

export type SetToggle = React.Dispatch<React.SetStateAction<Toggle>>;
export type SetBurgerClick = React.Dispatch<React.SetStateAction<BurgerClick>>;
export type SetUser = React.Dispatch<React.SetStateAction<UserType>>;
export type SetGenreData = React.Dispatch<React.SetStateAction<GenreData>>;
export type SetMovieData = React.Dispatch<React.SetStateAction<MovieData>>;
export type SetPopUpMessage = React.Dispatch<
  React.SetStateAction<PopUpMessage>
>;
export type SetMovieDetailData = React.Dispatch<
  React.SetStateAction<MovieDetailData>
>;
export type SetCastAndCrewData = React.Dispatch<
  React.SetStateAction<CastAndCrewData>
>;
export type SetRecommendationMovieData = React.Dispatch<
  React.SetStateAction<RecommendationMovieData>
>;

// object types

// backend related objects
export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieDetail = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: BelongsToCollection | null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: {
    id?: number;
    results: Video[];
  };
};

export type Video = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
};

export type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type CastAndCrew = {
  id: number;
  cast: Cast[];
  crew: Crew[];
};

export type Cast = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type Crew = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
};

// non backend related objects
export type Toggle = {
  theme: string;
  checked: boolean;
};

export type BurgerClick = {
  click: boolean;
  isMenuActive: boolean;
  isSearchActive: boolean;
};

export type ToggleState = {
  toggle: Toggle;
  setToggle: SetToggle;
};

export type Genre = {
  id: number;
  name: string;
};

export type UserType = {
  name: string;
  favoriteMovies: Movie[];
  isOnline: boolean;
  isMovieInFavorite: boolean;
  info: string;
};

export type MatchMovieParams = {
  history: H.History;
  location: H.Location;
  match: {
    isExact: boolean;
    params: {
      movieId: number;
    };
    path: string;
    url: string;
  };
  staticContext?: any;
};

// object types for API call
export type APIInfo = {
  isLoading: boolean;
  status: number;
  statusText: string;
  error: string;
};

export type MovieData = {
  page: number;
  movies: Movie[];
  apiInfo: APIInfo;
  total_pages: number;
  total_results: number;
};

export type GenreData = {
  genres: Genre[];
  apiInfo: APIInfo;
};

export type PopUpMessage = {
  message: string;
  isError: boolean;
  isHidden: boolean;
};

export type MovieDetailData = {
  movie: MovieDetail | null;
  apiInfo: APIInfo;
};

export type CastAndCrewData = {
  casts: Cast[];
  crews: Crew[];
  apiInfo: APIInfo;
};

export type RecommendationMovieData = {
  page: number;
  movies: Movie[];
  apiInfo: APIInfo;
  total_pages: number;
  total_results: number;
};

export type Params = {
  movieId: string | undefined;
};
