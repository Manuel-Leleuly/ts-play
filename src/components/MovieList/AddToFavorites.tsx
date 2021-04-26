import React, { useContext, useState } from "react";
import { FavoriteMovieContext } from "../../contexts/FavoriteMovieContext";
import { SetPopUpMessage } from "../../shared/Types";
import LoadingAnimation from "../Global/LoadingAnimation";
import { FaRegHeart, FaHeart } from "react-icons/fa";

type AddToFavoritesType = React.FC<{
  movieId: number;
  setPopupMessage: SetPopUpMessage;
  isHeader: boolean;
}>;

const AddToFavorites: AddToFavoritesType = ({
  movieId,
  setPopupMessage,
  isHeader,
}) => {
  const { isMovieInFavorite, handleFavoriteMovie } = useContext(
    FavoriteMovieContext
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    movieId: number
  ) => {
    event.preventDefault();
    handleFavoriteMovie(event, movieId, setPopupMessage, setIsLoading);
  };

  return (
    <>
      {isHeader ? (
        <button
          aria-label={`add movie to favorites`}
          className={`btn focus:outline-none btn--favorite ${
            isMovieInFavorite(movieId)
              ? "bg-accel-global-grey-light border-accel-global-grey-light"
              : "bg-transparent border-white"
          } flex flex-row justify-center items-center`}
          onClick={(e) => handleChange(e, movieId)}
          disabled={isLoading}
        >
          {isLoading ? (
            <LoadingAnimation size={5} />
          ) : isMovieInFavorite(movieId) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
      ) : (
        <button
          aria-label={`add movie to favorites`}
          className="focus:outline-none"
          onClick={(e) => handleChange(e, movieId)}
          disabled={isLoading}
        >
          {isLoading ? (
            <LoadingAnimation size={5} />
          ) : isMovieInFavorite(movieId) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
      )}
    </>
  );
};

export default AddToFavorites;
