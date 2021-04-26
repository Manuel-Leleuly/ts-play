import { useContext } from "react";
import { GenreContext } from "../../contexts/GenreContext";
import { BACKDROP_SIZE } from "../../shared/Constants";
import { Movie } from "../../shared/Types";
import { getImage } from "../../shared/Utils";
import GenreText from "../Global/GenreText";

type NowPlayingCardType = React.FC<{
  nowPlayingMovie: Movie;
}>;

const NowPlayingCard: NowPlayingCardType = ({ nowPlayingMovie }) => {
  const backdrop = getImage(
    BACKDROP_SIZE.w1280,
    nowPlayingMovie.backdrop_path,
    true
  );
  const countGenreShow = 3;
  const { genreData } = useContext(GenreContext);
  const { genres } = genreData;

  return (
    <div
      className="text-white bg-black mb-10 h-accel-carousel-mobile relative poster active carousel"
      style={{
        backgroundImage: nowPlayingMovie.poster_path ? `url(${backdrop})` : "",
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `top`,
      }}
    >
      <div className="pt-28 px-10 absolute z-10">
        <p className="uppercase font-bold text-xs mb-2 hidden md:block text-accel-carousel-not-active">
          now playing
        </p>
        <p className="capitalize text-4.5xl mb-4">{nowPlayingMovie.title}</p>
        <div className="flex flex-row flex-wrap justify-start items-center mb-4">
          {nowPlayingMovie.genre_ids
            ?.filter((movieGenre, idx) => idx < countGenreShow)
            .map((movieGenre) => {
              return genres.map((genre) => {
                if (movieGenre === genre.id) {
                  return (
                    <GenreText
                      key={movieGenre}
                      genreName={genre.name}
                      isHeader={true}
                    />
                  );
                }
                return "";
              });
            })}
        </div>
        <div className="md:w-105 w-full max-h-33">
          <p className="text-base font-normal ellipsis line-clamp-4">
            {nowPlayingMovie.overview}
          </p>
        </div>
      </div>
    </div>
  );
};
export default NowPlayingCard;
