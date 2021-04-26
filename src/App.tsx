import { lazy, useContext, useEffect, useState, Suspense } from "react";
import Footer from "./components/header_footer/global/Footer";
import Header from "./components/header_footer/global/Header";
import "./assets/css/mainCSS/main.css";
import { baseMovieData, LOCAL_ITEM, REQUESTS, THEME } from "./shared/Constants";
import { RecommendationMovieData } from "./shared/Types";
import { QueryContext } from "./contexts/QueryContext";
import { fetchMovies } from "./shared/API";
import { FavoriteMovieProvider } from "./contexts/FavoriteMovieContext";
import { Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/Global/ScrollToTop";
import Fallback from "./components/Global/Fallback";
import { WindowProvider } from "./contexts/WindowContext";

require("dotenv/config");

const Home = lazy(() => import("./components/MovieList/Main"));
const MovieDetail = lazy(() => import("./components/MovieDetail/MovieDetail"));
const MyFavorite = lazy(
  () => import("./components/FavoriteMovie/FavoriteMovieComponent")
);

function App() {
  const [
    searchMovieData,
    setSearchMovieData,
  ] = useState<RecommendationMovieData>(baseMovieData);

  const { query } = useContext(QueryContext);

  useEffect(() => {
    if (!query) {
      setSearchMovieData(baseMovieData);
      return;
    }
    setSearchMovieData({
      ...searchMovieData,
      apiInfo: {
        ...searchMovieData.apiInfo,
        isLoading: true,
      },
    });
    const getMovieList = `${REQUESTS.SEARCH_MOVIE}&query=${query}`;
    fetchMovies(getMovieList, searchMovieData, setSearchMovieData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const [toggle, setToggle] = useState<boolean>(
    localStorage.getItem(LOCAL_ITEM.THEME) === THEME.DARK || true
  );
  useEffect(() => {
    localStorage.setItem(LOCAL_ITEM.THEME, toggle ? THEME.DARK : THEME.LIGHT);
  }, [toggle]);

  return (
    <FavoriteMovieProvider>
      <WindowProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div id="app" className={`${toggle ? "dark" : ""}`}>
            <Header
              movieData={searchMovieData}
              toggle={toggle}
              setToggle={setToggle}
            />
            <Suspense fallback={<Fallback />}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/movie/:movieId">
                <MovieDetail />
              </Route>
              <Route exact path="/favorite">
                <MyFavorite />
              </Route>
            </Suspense>
            <Footer />
          </div>
        </BrowserRouter>
      </WindowProvider>
    </FavoriteMovieProvider>
  );
}

export default App;
