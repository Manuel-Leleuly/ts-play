import React, { useState } from "react";
import { basePopupMessage } from "../../shared/Constants";
import { MovieDetailData, PopUpMessage } from "../../shared/Types";
import PopUpMessageCard from "../Global/PopUpMessageCard";
import MovieDetailHeaderCard from "./MovieDetailHeaderCard";

type MovieDetailHeaderType = React.FC<{
  movieDetail: MovieDetailData;
}>;

const MovieDetailHeader: MovieDetailHeaderType = ({ movieDetail }) => {
  const [favoriteMessage, setFavoriteMessage] = useState<PopUpMessage>(
    basePopupMessage
  );

  return (
    <>
      <MovieDetailHeaderCard
        movie={movieDetail.movie}
        setPopupMessage={setFavoriteMessage}
      />
      {!favoriteMessage.isHidden && (
        <PopUpMessageCard
          popupMessage={favoriteMessage}
          setPopupMessage={setFavoriteMessage}
        />
      )}
    </>
  );
};
export default MovieDetailHeader;
