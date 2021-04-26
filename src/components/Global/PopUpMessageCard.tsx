import { useEffect } from "react";
import { PopUpMessage, SetPopUpMessage } from "../../shared/Types";
import { FaRegTimesCircle, FaRegCheckCircle, FaTimes } from "react-icons/fa";

type PopUpMessageType = React.FC<{
  popupMessage: PopUpMessage;
  setPopupMessage: SetPopUpMessage;
}>;

const PopUpMessageCard: PopUpMessageType = ({
  popupMessage,
  setPopupMessage,
}) => {
  const icon = popupMessage.isError ? (
    <FaRegTimesCircle />
  ) : (
    <FaRegCheckCircle />
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      handleChange();
    }, 5000);
    return () => clearTimeout(timer);
  });

  const handleChange = () => {
    setPopupMessage({
      ...popupMessage,
      message: "",
      isHidden: true,
    });
  };

  return (
    <div
      className={`${"flex"} max-w-80 bg-accel-header-dark text-white fixed z-40 top-21 right-6 w-max py-2.5 px-3 rounded flex-row justify-start items-center opacity-100`}
    >
      {icon}
      <h2 className="ml-3">{popupMessage.message}</h2>
      <button
        className="focus:outline-none bg-transparent ml-3"
        onClick={handleChange}
      >
        <FaTimes />
      </button>
    </div>
  );
};
export default PopUpMessageCard;
