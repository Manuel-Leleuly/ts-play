import { POSTER_SIZE } from "../../../shared/Constants";
import { Movie } from "../../../shared/Types";
import { getImage, getYear } from "../../../shared/Utils";

const SearchMovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  const year = getYear(movie.release_date);
  const poster = getImage(POSTER_SIZE.W92, movie.poster_path, false);
  return (
    <div className="text-accel-global-grey-light-2 dark:text-white capitalize flex flex-row items-center mb-5">
      <img src={poster} alt="movie poster" className="w-12 h-20" />
      <div className="ml-5">
        <p className="font-bold lg:text-white dark:text-white">{movie.title}</p>
        {year ? (
          <p className="text-accel-global-grey-light lg:text-white dark:text-white">
            {year}
          </p>
        ) : (
          <p className="lowercase text-accel-global-grey-light lg:text-white dark:text-white">
            n/a
          </p>
        )}
      </div>
    </div>
  );
};
export default SearchMovieCard;
