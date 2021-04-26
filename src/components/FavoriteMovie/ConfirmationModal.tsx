import { Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { FavoriteMovieContext } from "../../contexts/FavoriteMovieContext";
import { SetBoolean, SetPopUpMessage } from "../../shared/Types";
import LoadingAnimation from "../Global/LoadingAnimation";

type ConfirmationModalType = React.FC<{
  setShowModal: SetBoolean;
  setClearAllMessage: SetPopUpMessage;
}>;

const ConfirmationModal: ConfirmationModalType = ({
  setShowModal,
  setClearAllMessage,
}) => {
  const { removeAllFavoriteMovie } = useContext(FavoriteMovieContext);
  const [loading, setLoading] = useState(false);

  const handleRemoveAll = (event: React.MouseEvent) => {
    event.preventDefault();
    setLoading(true);
    removeAllFavoriteMovie(setLoading, setShowModal, setClearAllMessage);
  };

  const handleCancel = () => {
    document.body.setAttribute("style", ``);
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="bg-transparent w-full px-4 md:px-0 md:w-110 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-accel-global-grey-light-2 rounded-2xl py-10 px-15 max-w-modal mx-auto">
          {loading ? (
            <div className="w-full h-full flex flex-row justify-center items-center">
              <LoadingAnimation size={10} />
            </div>
          ) : (
            <>
              <p className="capitalize text-2xl font-medium mb-3 text-center">
                clear my favorite lists
              </p>
              <p className="text-lg font-normal text-center text-accel-global-grey-light-3 mb-10">
                Are you sure to clear all your favorite movies?
              </p>
              <Grid container spacing={4}>
                <Grid item sm={6} xs={12}>
                  <button
                    className="btn btn--outline py-2 w-full capitalize"
                    onClick={(e) => handleRemoveAll(e)}
                  >
                    clear all
                  </button>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <button
                    className="btn btn--blue py-2 w-full capitalize"
                    onClick={handleCancel}
                  >
                    cancel
                  </button>
                </Grid>
              </Grid>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ConfirmationModal;
