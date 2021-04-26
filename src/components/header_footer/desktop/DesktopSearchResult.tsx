import { useContext, useEffect, useRef, useState } from "react";
import { QueryContext } from "../../../contexts/QueryContext";
import useOnClickOutside from "../../../shared/CustomHooks";
import { MovieData } from "../../../shared/Types";
import SearchResult from "../global/SearchResult";

type DesktopSearchResultType = React.FC<{
  searchIsFocus: boolean;
  movieData: MovieData;
}>;

const DesktopSearchResult: DesktopSearchResultType = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { query } = useContext(QueryContext);
  const { searchIsFocus } = props;

  useEffect(() => {
    if (query && searchIsFocus) {
      setIsOpen(true);
    }
  }, [query, searchIsFocus]);

  const resultRef = useRef(null);
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  useOnClickOutside(resultRef, handleClickOutside);

  return (
    <div
      ref={resultRef}
      onClick={handleClickOutside}
      className={`${
        isOpen ? "block" : "hidden"
      } absolute bg-accel-header-dark w-72 max-w-search top-12 rounded shadow-sm`}
    >
      <SearchResult {...props} />
    </div>
  );
};

export default DesktopSearchResult;
