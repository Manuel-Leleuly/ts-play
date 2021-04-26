import React, { useState } from "react";
import logo from "../../../assets/media/images/logo-frame.png";
import Burger from "../mobile/Burger";
import MobileMenu from "../mobile/MobileMenu";
import MobileSearch from "../mobile/MobileSearch";
import SearchIcon from "../mobile/SearchIcon";
import { MovieData, SetBoolean } from "../../../shared/Types";
import DesktopSearch from "../desktop/DesktopSearch";
import DesktopProfile from "../desktop/DesktopProfile";
import { Link } from "react-router-dom";

type HeaderType = React.FC<{
  movieData: MovieData;
  toggle: boolean;
  setToggle: SetBoolean;
}>;

const Header: HeaderType = (props) => {
  const { movieData, toggle, setToggle } = props;
  const [burgerClick, setBurgerClick] = useState({
    click: false,
    isMenuActive: false,
    isSearchActive: false,
  });

  return (
    <React.Fragment>
      <nav className="navbar bg-accel-header-dark text-white h-16 w-full fixed z-50 navbar--desktop">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2.5 ml-5 lg:my-3 lg:ml-20 flex flex-row w-max justify-between align-middle text-base capitalize">
            <img
              src={logo}
              alt="accelplay"
              className="h-10"
              width="120px"
              height="40px"
            />
            <div className="hidden lg:flex lg:items-center">
              <Link to={`/`}>
                <button className="focus:outline-none ml-20 mr-16 capitalize">
                  movies
                </button>
              </Link>
              <Link to={`/favorite`}>
                <button className="focus:outline-none capitalize">
                  my favorites
                </button>
              </Link>
            </div>
          </div>
          <div className="my-5 mr-6 flex flex-row justify-between items-center text-base font-extralight lg:hidden">
            <SearchIcon burgerClick={burgerClick} setClick={setBurgerClick} />
            <Burger burgerClick={burgerClick} setClick={setBurgerClick} />
          </div>
          <div className="hidden lg:flex flex-row justify-between my-3 mr-20 items-center">
            <DesktopSearch movieData={movieData} />
            <DesktopProfile toggle={toggle} setToggle={setToggle} />
          </div>
        </div>
      </nav>
      <MobileMenu
        burgerClick={burgerClick}
        toggle={toggle}
        setToggle={setToggle}
        setBurgerClick={setBurgerClick}
      />
      <MobileSearch
        burgerClick={burgerClick}
        movieData={movieData}
        setBurgerClick={setBurgerClick}
      />
    </React.Fragment>
  );
};

export default Header;
