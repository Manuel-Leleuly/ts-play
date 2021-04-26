import { SetBoolean } from "../../../shared/Types";
import ToggleTheme from "./ToggleTheme";

type ProfileMenuType = React.FC<{
  toggle: boolean;
  setToggle: SetBoolean;
}>;

const ProfileMenu: ProfileMenuType = ({ toggle, setToggle }) => {
  return (
    <ul className="mx-2 mt-7 capitalize lg:mt-0 lg:mx-0">
      <li>
        <ToggleTheme toggle={toggle} setToggle={setToggle} />
      </li>
      <li>
        <hr className="my-7 border-accel-divider-dark lg:my-2.5" />
      </li>
      <li className="border-none mx-4 mt-0 mb-10 lg:mb-0">
        <p className="text-accel-logout border-none text-accel-logout-light dark:text-accel-logout-dark lg:text-accel-logout-dark">
          logout
        </p>
      </li>
    </ul>
  );
};
export default ProfileMenu;
