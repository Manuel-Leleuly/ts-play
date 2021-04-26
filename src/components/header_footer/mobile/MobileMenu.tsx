import { Link } from "react-router-dom";
import { BurgerClick, SetBoolean, SetBurgerClick } from "../../../shared/Types";
import Avatar from "../global/Avatar";
import ProfileMenu from "../global/ProfileMenu";
import { FaCaretDown } from "react-icons/fa";

type MobileMenuType = React.FC<{
  burgerClick: BurgerClick;
  setBurgerClick: SetBurgerClick;
  toggle: boolean;
  setToggle: SetBoolean;
}>;

const MobileMenu: MobileMenuType = (props) => {
  const { burgerClick, setBurgerClick, toggle, setToggle } = props;
  const handleMenuClick = () => {
    setBurgerClick({
      ...burgerClick,
      click: !burgerClick.click,
      isMenuActive: !burgerClick.isMenuActive,
    });
  };

  return (
    <div
      id="menu--mobile"
      className={`menu--mobile bg-white dark:bg-accel-menu-dark fixed h-full w-full pt-24 px-9 overflow-y-scroll z-40 lg:hidden ${
        burgerClick.click && burgerClick.isMenuActive ? "active" : ""
      }`}
    >
      <div className="menu--content capitalize text-base">
        <ul>
          <li>
            <Link to={`/`} onClick={handleMenuClick}>
              <p>movies</p>
            </Link>
          </li>
          <li className="mt-6 pb-8">
            <Link to={`/favorite`} onClick={handleMenuClick}>
              <p>my favorites</p>
            </Link>
          </li>
          <li className="mt-8">
            <div>
              <div className="flex justify-start items-center">
                <Avatar />
                <p className="px-4">my profile</p>
                <FaCaretDown />
              </div>
            </div>
            <ProfileMenu toggle={toggle} setToggle={setToggle} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
