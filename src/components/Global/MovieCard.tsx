import React, { useContext, useState } from "react";
import { GenreContext } from "../../contexts/GenreContext";
import { basePopupMessage, POSTER_SIZE } from "../../shared/Constants";
import { Movie, PopUpMessage } from "../../shared/Types";
import { getImage, getYear } from "../../shared/Utils";
import GenreText from "./GenreText";
import PopUpMessageCard from "./PopUpMessageCard";
import AddToFavorites from "../MovieList/AddToFavorites";
import PosterBackdrop from "./PosterBackdrop";
import { WindowContext } from "../../contexts/WindowContext";

type MovieCardType = React.FC<{
  movie: Movie;
}>;

const MovieCard: MovieCardType = (props) => {
  const { movie } = props;
  const { genreData } = useContext(GenreContext);
  const { isMobile } = useContext(WindowContext);
  const posterSize = isMobile() ? POSTER_SIZE.W185 : POSTER_SIZE.W342;
  const poster = getImage(posterSize, movie.poster_path, false);
  const countGenreShow = 1;
  const year = getYear(movie.release_date);

  const [favoriteMessage, setFavoriteMessage] = useState<PopUpMessage>(
    basePopupMessage
  );

  return (
    <>
      <div className="lg:w-49 lg:h-73 w-36 h-53 mb-4 relative mx-auto ">
        <PosterBackdrop posterUrl={poster} movieTitle={movie.title} />
        <div className="movie--card">
          <div className="absolute z-10 bottom-5 px-5 w-full text-white">
            <p className="lg:text-lg text-xs capitalize mb-1 font-medium">
              {movie.title}
            </p>
            <p className="mb-2 lg:text-base text-xs lowercase">{year}</p>
            <div className="flex flex-row justify-between items-center">
              {movie.genre_ids
                ?.filter((movieGenre, idx) => idx < countGenreShow)
                .map((movieGenre) => {
                  return genreData.genres.map((genre) => {
                    if (movieGenre === genre.id) {
                      return (
                        <GenreText
                          key={genre.id}
                          genreName={genre.name}
                          isHeader={false}
                        />
                      );
                    }
                    return null;
                  });
                })}
              <AddToFavorites
                movieId={movie.id}
                setPopupMessage={setFavoriteMessage}
                isHeader={false}
              />
            </div>
          </div>
        </div>
      </div>
      {!favoriteMessage.isHidden && (
        <PopUpMessageCard
          popupMessage={favoriteMessage}
          setPopupMessage={setFavoriteMessage}
        />
      )}
    </>
  );
};
export default MovieCard;
