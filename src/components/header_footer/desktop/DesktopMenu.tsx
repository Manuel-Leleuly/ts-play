import { useRef } from "react";
import { SetBoolean } from "../../../shared/Types";
import ProfileMenu from "../global/ProfileMenu";
import useOnClickOutside from "../../../shared/CustomHooks";

type DesktopMenuType = React.FC<{
  toggle: boolean;
  setToggle: SetBoolean;
  setClick: SetBoolean;
}>;

const DesktopMenu: DesktopMenuType = ({ toggle, setToggle, setClick }) => {
  const menuRef = useRef(null);
  const handleClickOutside = () => {
    setClick(false);
  };
  useOnClickOutside(menuRef, handleClickOutside);

  return (
    <div
      ref={menuRef}
      className="p-4 absolute w-60 bg-accel-header-dark top-14 right-20 rounded shadow-sm"
    >
      <ProfileMenu toggle={toggle} setToggle={setToggle} />
    </div>
  );
};
export default DesktopMenu;
