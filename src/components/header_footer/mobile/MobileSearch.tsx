import { BurgerClick, MovieData, SetBurgerClick } from "../../../shared/Types";
import MovieSearchBar from "../global/MovieSearchBar";
import SearchResult from "../global/SearchResult";

type MobileSearchType = React.FC<{
  burgerClick: BurgerClick;
  movieData: MovieData;
  setBurgerClick: SetBurgerClick;
}>;

const MobileSearch: MobileSearchType = (props) => {
  const { burgerClick, movieData, setBurgerClick } = props;
  return (
    <div
      id="search--mobile"
      className={`search--mobile w-full fixed h-screen bg-white dark:bg-accel-menu-dark overflow-y-auto z-40 lg:hidden ${
        burgerClick.click && burgerClick.isSearchActive ? "active" : ""
      }`}
    >
      <div className="search--mobile-content pt-20">
        <MovieSearchBar />
        <SearchResult
          movieData={movieData}
          burgerClick={burgerClick}
          setBurgerClick={setBurgerClick}
        />
      </div>
    </div>
  );
};
export default MobileSearch;
