import React from "react";
import { BurgerClick, SetBurgerClick } from "../../../shared/Types";

type BurgerType = React.FC<{
  burgerClick: BurgerClick;
  setClick: SetBurgerClick;
}>;

const Burger: BurgerType = ({ burgerClick, setClick }) => {
  function setActive() {
    if (burgerClick.click) {
      return setClick({
        ...burgerClick,
        click: false,
        isMenuActive: false,
        isSearchActive: false,
      });
    }
    setClick({
      ...burgerClick,
      click: !burgerClick.click,
      isMenuActive: !burgerClick.isMenuActive,
    });
  }

  return (
    <button
      aria-label="profile menu"
      className={`burger focus:outline-none ${
        burgerClick.click ? "active" : ""
      }`}
      aria-expanded={false}
      onClick={setActive}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

export default Burger;
