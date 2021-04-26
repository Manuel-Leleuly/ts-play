import { APIInfo, MovieData, MovieDetailData } from "./Types";

export const THEME = {
  DARK: "dark",
  LIGHT: "light",
};

export const LOCAL_ITEM = {
  THEME: "theme",
};

export const GENRE = {
  ALL_GENRE: 0,
};

export const YEAR = {
  ALL_YEAR: 0,
  START_YEAR: 1970,
  END_YEAR: new Date().getFullYear(),
};

export const MOVIE = {
  MOVIE_SHOWN: 3,
};

export const INFO = {
  MOVIE_ALREADY_IN_FAVORITES: "Movie is already in your favorites",
  MOVIE_ADDED_TO_FAVORITES: "Movie added to your favorites",
  MOVIE_REMOVED_FROM_FAVORITES: "Movie removed from favorites",
  UNRECOGNIZED_DATA_TYPE: "unrecognized data type",
  CLEAR_ALL_MOVIES_FROM_FAVORITES:
    "all movies have been removed from favorites",
  FAVORITE_IS_EMPTY: "you don't have any favorite movies",
  LIMIT_FAVORITE_MOVIE: "you can only add 20 movies to favorites",
};

export const API = {
  API_KEY: process.env.REACT_APP_TMDB,
  SESSION_ID: process.env.REACT_APP_SESSION_ID,
  ACCOUNT_ID: process.env.REACT_APP_ACCOUNT_ID,
  BASE_URL: "https://api.themoviedb.org/3",
  IMAGE_BASE_URL: "https://image.tmdb.org/t/p/",
  api_key_2: "12423",
};

export const REQUESTS = {
  SEARCH_MOVIE: `${API.BASE_URL}/search/movie?api_key=${API.API_KEY}`,
  NOW_PLAYING: `${API.BASE_URL}/movie/now_playing?api_key=${API.API_KEY}&language=en-US&page=1`,
  MOVIE_LIST: `${API.BASE_URL}/discover/movie?api_key=${API.API_KEY}&sort_by=popularity.desc&page=`,
  GENRE_MOVIE: `${API.BASE_URL}/genre/movie/list?api_key=${API.API_KEY}&language=en-US`,
  ADD_REMOVE_FAVORITES: `${API.BASE_URL}/account/${API.ACCOUNT_ID}/favorite?api_key=${API.API_KEY}&session_id=${API.SESSION_ID}`,
  SHOW_FAVORITES: `${API.BASE_URL}/account/${API.ACCOUNT_ID}/favorite/movies?api_key=${API.API_KEY}&session_id=${API.SESSION_ID}&language=en-US&sort_by=created_at.asc`,
};

export const IMAGE_TYPE = {
  BACKDROP: "BACKDROP",
  LOGO: "LOGO",
  POSTER: "POSTER",
  PROFILE: "PROFILE",
  STILL: "STILL",
};

export const BACKDROP_SIZE = {
  W300: "w300",
  W780: "w780",
  w1280: "w1280",
  original: "original",
};

export const LOGO_SIZE = {
  W45: "w45",
  W92: "w92",
  W154: "w154",
  W185: "w185",
  W300: "w300",
  W500: "w500",
  original: "original",
};

export const POSTER_SIZE = {
  W92: "w92",
  W154: "w154",
  W185: "w185",
  W342: "w342",
  W500: "w500",
  W780: "w780",
  original: "original",
};

export const PROFILE_SIZE = {
  W45: "w45",
  W185: "w185",
  H632: "h632",
  original: "original",
};

export const STILL_SIZE = {
  W92: "w92",
  W185: "w185",
  W300: "w300",
  original: "original",
};

export const VIDEO_SOURCE = {
  YOUTUBE: `YouTube`,
  VIMEO: `Vimeo`,
};

export const VIDEO_SOURCE_BASE_URL = {
  YOUTUBE: `https://www.youtube.com/watch?v=`,
  VIMEO: `https://vimeo.com/`,
};

export const VIDEO_TYPE = {
  TRAILER: "Trailer",
  FEATURETTE: "Featurette",
  TEASER: "Teaser",
  CLIP: "Clip",
  BEHIND_THE_SCENES: "Behind the Scenes",
  BLOOPERS: "Bloopers",
};

export const basePopupMessage = {
  message: "",
  isError: false,
  isHidden: true,
};

export const DATA_ERROR = {
  CAST: "no cast data available",
  RECOMMENDATION: "no recommended movie(s) available",
  TRAILER: "this movie doesn't have any trailer available",
  FAVORITE: "you don't have favorite movie(s)",
  SEARCH: "your query returns no result(s)",
};

export const TEXT_ALIGN = {
  CENTER: "center",
};

export const baseApiInfo: APIInfo = {
  isLoading: true,
  status: 0,
  statusText: "",
  error: "",
};

export const baseMovieData: MovieData = {
  page: 0,
  movies: [],
  apiInfo: baseApiInfo,
  total_pages: 0,
  total_results: 0,
};

export const baseMovieDetailData: MovieDetailData = {
  movie: null,
  apiInfo: baseApiInfo,
};
