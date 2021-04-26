import React, { useContext } from "react";
import { GenreContext } from "../../contexts/GenreContext";
import { GENRE, YEAR } from "../../shared/Constants";
import { SetNumber } from "../../shared/Types";

type CategoriesType = React.FC<{
  setGenreSelected: SetNumber;
  setYearSelected: SetNumber;
}>;

const Categories: CategoriesType = (props) => {
  const { setGenreSelected, setYearSelected } = props;
  const { genreData } = useContext(GenreContext);
  const years = [];
  for (let i = YEAR.END_YEAR; i >= YEAR.START_YEAR; i--) {
    years.push(
      <option
        key={i}
        value={i}
        className="bg-white dark:bg-accel-header-dark text-accel-global-grey-light-2 dark:text-white border-transparent hover:bg-transparent focus:bg-transparent focus:outline-none"
      >
        {i}
      </option>
    );
  }

  return (
    <>
      <div className="md:flex md:flex-row md:justify-start md:mr-6">
        <div className="flex flex-col md:mr-6">
          <label htmlFor="genres" className="capitalize font-medium">
            genres:
          </label>
          <select
            name="genres"
            id="genres"
            className="md:w-60 capitalize bg-transparent w-full border-accel-global-grey-light-3 dark:border-white border rounded py-2 px-2.5 mt-2 mb-6"
            onChange={(e) => setGenreSelected(parseInt(e.target.value))}
          >
            <option
              value={GENRE.ALL_GENRE}
              className="bg-white dark:bg-accel-header-dark text-accel-global-grey-light-2 dark:text-white border-transparent hover:bg-transparent focus:bg-transparent focus:outline-none"
            >
              all genres
            </option>
            {genreData.genres.map((genre) => {
              return (
                <option
                  key={genre.id}
                  value={genre.id}
                  className="bg-white dark:bg-accel-header-dark text-accel-global-grey-light-2 dark:text-white border-transparent hover:bg-transparent focus:bg-transparent focus:outline-none"
                >
                  {genre.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="years" className="capitalize font-medium">
            Years:
          </label>
          <select
            onChange={(e) => setYearSelected(parseInt(e.target.value))}
            name="years"
            id="years"
            className="md:w-60 capitalize bg-transparent w-full border-accel-global-grey-light-3 dark:border-white border rounded py-2 px-2.5 mt-2 mb-6"
          >
            <option
              value={YEAR.ALL_YEAR}
              className="bg-white dark:bg-accel-header-dark text-accel-global-grey-light-2 dark:text-white border-transparent hover:bg-transparent focus:bg-transparent focus:outline-none"
            >
              all years
            </option>
            {years}
          </select>
        </div>
      </div>
    </>
  );
};
export default Categories;
