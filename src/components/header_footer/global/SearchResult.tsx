import { useContext } from "react";
import { Link } from "react-router-dom";
import { QueryContext } from "../../../contexts/QueryContext";
import { DATA_ERROR, TEXT_ALIGN } from "../../../shared/Constants";
import { BurgerClick, MovieData, SetBurgerClick } from "../../../shared/Types";
import ConnectionErrorText from "../../Global/ConnectionErrorText";
import DataErrorText from "../../Global/DataErrorText";
import LoadingAnimation from "../../Global/LoadingAnimation";
import SearchMovieCard from "./SearchMovieCard";

type SearchResultType = React.FC<{
  movieData: MovieData;
  burgerClick?: BurgerClick;
  setBurgerClick?: SetBurgerClick;
}>;

const SearchResult: SearchResultType = ({
  movieData,
  burgerClick,
  setBurgerClick,
}) => {
  const countMovieShown = 3;
  const { movies, apiInfo } = movieData;
  const { isLoading, error } = apiInfo;
  const { query } = useContext(QueryContext);
  const handleSearchClick = () => {
    if (burgerClick && setBurgerClick) {
      setBurgerClick({
        ...burgerClick,
        click: !burgerClick.click,
        isSearchActive: !burgerClick.isSearchActive,
      });
    }
  };

  return (
    <div className="w-full text-white">
      <div className="mx-7 mt-7">
        {movies.length === 0 && !isLoading && (
          <div className="w-full flex flex-row items-center justify-center mb-6">
            <DataErrorText
              dataError={DATA_ERROR.SEARCH}
              textAlignment={TEXT_ALIGN.CENTER}
            />
          </div>
        )}
        {error ? (
          <div className="w-full flex flex-row items-center justify-center">
            <ConnectionErrorText
              errorMessage={apiInfo.statusText}
              textAlignment={TEXT_ALIGN.CENTER}
            />
          </div>
        ) : isLoading && query ? (
          <div className="w-full flex flex-row items-center justify-center pb-5">
            <LoadingAnimation size={7} />
          </div>
        ) : (
          movies
            .filter((movie, idx) => idx < countMovieShown)
            .map((movie) => {
              return (
                <Link
                  key={movie.id}
                  onClick={handleSearchClick}
                  to={`/movie/${movie.id}`}
                >
                  <SearchMovieCard key={movie.id} movie={movie} />
                </Link>
              );
            })
        )}
      </div>
    </div>
  );
};
export default SearchResult;
