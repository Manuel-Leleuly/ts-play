import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BurgerClick, SetBurgerClick } from "../../../shared/Types";

type SearchIconType = React.FC<{
  burgerClick: BurgerClick;
  setClick: SetBurgerClick;
}>;

const SearchIcon: SearchIconType = ({ burgerClick, setClick }) => {
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setDisabled(burgerClick.isSearchActive);
  }, [burgerClick.isSearchActive]);
  return (
    <button
      aria-label={`search menu`}
      onClick={() =>
        setClick({
          ...burgerClick,
          click: true,
          isSearchActive: true,
        })
      }
      disabled={disabled}
      className={`${burgerClick.click ? "hidden" : "block"} mr-3`}
    >
      <FaSearch />
    </button>
  );
};
export default SearchIcon;
