import { THEME } from "../../../shared/Constants";
import { SetBoolean } from "../../../shared/Types";

type ToggleThemeType = React.FC<{
  toggle: boolean;
  setToggle: SetBoolean;
}>;

const ToggleTheme: ToggleThemeType = ({ toggle, setToggle }) => {
  const toggleTheme = toggle ? THEME.DARK : THEME.LIGHT;
  return (
    <div className="flex flex-row items-center justify-between mx-4">
      <p>theme: {toggleTheme}</p>
      <div>
        <label
          htmlFor="theme"
          className="toggle relative inline-block w-16 h-8"
        >
          <input
            type="checkbox"
            id="theme"
            checked={toggle}
            onChange={() => setToggle(!toggle)}
            className="opacity-0 w-0 h-0"
          />
          <span className="toggle-slide round rounded-lg absolute cursor-pointer top-1/2 left-1/2 right-0 bottom-0 w-7 h-3 duration-300"></span>
        </label>
      </div>
    </div>
  );
};
export default ToggleTheme;
