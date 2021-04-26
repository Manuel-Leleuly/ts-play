import { useContext, useState } from "react";
import { FavoriteMovieContext } from "../../contexts/FavoriteMovieContext";
import { GenreProvider } from "../../contexts/GenreContext";
import Categories from "../MovieList/Categories";
import ClearAllFavorites from "./ClearAllFavorites";
import FavoriteMovies from "./FavoriteMovies";

const FavoriteMovieComponent = () => {
  const [genreSelected, setGenreSelected] = useState(0);
  const [yearSelected, setYearSelected] = useState(0);
  const { favoriteMoviesData } = useContext(FavoriteMovieContext);

  return (
    <GenreProvider>
      <div className="px-9 pt-30 pb-15 bg-white dark:bg-accel-body-dark text-black dark:text-white min-h-screen">
        <p className="capitalize mb-6 text-2xl font-medium">{`favorite movie (${favoriteMoviesData.movies.length}/20)`}</p>
        <div className="md:flex block flex-row justify-between items-center">
          <Categories
            setGenreSelected={setGenreSelected}
            setYearSelected={setYearSelected}
          />
          <div className="md:block hidden">
            <ClearAllFavorites />
          </div>
        </div>
        <FavoriteMovies
          genreSelected={genreSelected}
          yearSelected={yearSelected}
        />
        <div className="md:hidden block w-full">
          <ClearAllFavorites />
        </div>
      </div>
    </GenreProvider>
  );
};
export default FavoriteMovieComponent;
