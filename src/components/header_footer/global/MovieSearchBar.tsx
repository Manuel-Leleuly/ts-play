import React, { useContext } from "react";
import { QueryContext } from "../../../contexts/QueryContext";
import { SetBoolean } from "../../../shared/Types";
import { FaSearch } from "react-icons/fa";

type SearchBarType = React.FC<{
  searchIsFocus?: boolean;
  setSearchIsFocus?: SetBoolean;
}>;

const MovieSearchBar: SearchBarType = (props) => {
  const { searchIsFocus, setSearchIsFocus } = props;
  const setOnFocus = () => {
    if (searchIsFocus !== undefined && setSearchIsFocus !== undefined) {
      setSearchIsFocus(!searchIsFocus);
    }
  };

  const { handleQuery, stringValue } = useContext(QueryContext);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    handleQuery(event);
  };

  return (
    <div className="w-4/5 lg:w-full mx-auto lg:mx-0">
      <div className="flex px-3 flex-row justify-items-start w-full lg:max-w-search h-10 rounded-full mr-4 bg-accel-search-light dark:bg-accel-search-dark lg:bg-accel-search-dark">
        <div className="my-2.5 mr-2">
          <FaSearch color="white" />
        </div>
        <input
          type="text"
          className="w-full bg-transparent text-accel-global-grey-light-3 lg:text-white dark:text-white focus:text-accel-global-grey-light-2 focus:dark:text-white focus:lg:text-white focus:outline-none"
          placeholder="Search movie title..."
          onChange={handleInput}
          value={stringValue}
          onFocus={setOnFocus}
          onBlur={setOnFocus}
        />
      </div>
    </div>
  );
};

export default MovieSearchBar;
