import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { SetBoolean } from "../../../shared/Types";
import Avatar from "../global/Avatar";
import DesktopMenu from "./DesktopMenu";

type DesktopProfileType = React.FC<{
  toggle: boolean;
  setToggle: SetBoolean;
}>;

const DesktopProfile: DesktopProfileType = ({ toggle, setToggle }) => {
  const [click, setClick] = useState(false);
  return (
    <React.Fragment>
      <button
        onClick={() => setClick(!click)}
        className="flex flex-row justify-item-between items-center focus:outline-none ml-4"
      >
        <div className="w-8 h-8 rounded-full bg-white mr-1">
          <Avatar />
        </div>
        <FaCaretDown />
      </button>
      {click && (
        <DesktopMenu
          toggle={toggle}
          setToggle={setToggle}
          setClick={setClick}
        />
      )}
    </React.Fragment>
  );
};
export default DesktopProfile;
