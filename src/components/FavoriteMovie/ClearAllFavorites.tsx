import { useContext, useState } from "react";
import { FavoriteMovieContext } from "../../contexts/FavoriteMovieContext";
import { basePopupMessage, INFO } from "../../shared/Constants";
import { PopUpMessage } from "../../shared/Types";
import PopUpMessageCard from "../Global/PopUpMessageCard";
import ConfirmationModal from "./ConfirmationModal";
import { FiTrash } from "react-icons/fi";

const ClearAllFavorites = () => {
  const [showModal, setShowModal] = useState(false);
  const [clearAllMessage, setClearAllMessage] = useState<PopUpMessage>(
    basePopupMessage
  );
  const { favoriteMoviesData } = useContext(FavoriteMovieContext);
  const [favoriteMessage, setFavoriteMessage] = useState<PopUpMessage>(
    basePopupMessage
  );
  const handleClearAll = () => {
    if (favoriteMoviesData.movies.length === 0) {
      return setFavoriteMessage({
        message: INFO.FAVORITE_IS_EMPTY,
        isError: true,
        isHidden: false,
      });
    }
    document.body.setAttribute("style", `position: fixed; left: 0; right: 0;`);
    setShowModal(true);
  };

  return (
    <>
      <button
        className="btn btn--secondary py-1 px-3 md:w-max w-full md:mt-0 mt-6"
        onClick={handleClearAll}
      >
        <div className="w-full flex flex-row justify-center items-center">
          <FiTrash />
          <p className="ml-3 capitalize">clear all</p>
        </div>
      </button>
      {showModal && (
        <ConfirmationModal
          setShowModal={setShowModal}
          setClearAllMessage={setClearAllMessage}
        />
      )}
      {!clearAllMessage.isHidden && (
        <PopUpMessageCard
          popupMessage={clearAllMessage}
          setPopupMessage={setClearAllMessage}
        />
      )}
      {!favoriteMessage.isHidden && (
        <PopUpMessageCard
          popupMessage={favoriteMessage}
          setPopupMessage={setFavoriteMessage}
        />
      )}
    </>
  );
};
export default ClearAllFavorites;
