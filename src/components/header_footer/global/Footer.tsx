import Logo from "../../../assets/media/images/logo-frame.png";
import TMDB from "../../../assets/media/images/tmdb.svg";
import Subscribe from "./Subscribe";
import { FaRegCopyright } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="text-white bg-accel-header-dark px-9 pb-9 pt-8 w-full md:pt-16">
      <div className="md:flex md:flex-row md:justify-between md:align-middle">
        <div>
          <img
            src={Logo}
            alt="accelplay-logo"
            className="mb-8 w-40 h-auto"
            width="168px"
            height="56px"
          />
          <div className="md:flex md:flex-row md:justify-between">
            <Link to={`/`}>
              <h2 className="capitalize mb-5 md:mr-16 md:mb-0">movies</h2>
            </Link>
            <Link to={`/favorite`}>
              <h2 className="capitalize mb-14 md:mb-0">my favorite</h2>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="mb-5">Get the latest updates</h2>
          <Subscribe />
        </div>
      </div>
      <hr className="border-accel-divider-dark md:mt-20" />
      <div className="w-full">
        <div className="flex flex-row justify-center items-center mt-8 mb-2">
          <FaRegCopyright />
          <p className="font-thin ml-2 text-accel-footer-dark">
            {year} - AccelPlay all rights reserved.
          </p>
        </div>
        <div className="flex flex-row justify-center items-center">
          <p className="font-thin text-accel-footer-dark mr-2">Powered by</p>
          <a href="https://www.themoviedb.org/">
            <img src={TMDB} alt="tmdb-logo" width="30px" height="13px" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
