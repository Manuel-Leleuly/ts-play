import { SetBoolean } from "../../shared/Types";
import { FaRegTimesCircle } from "react-icons/fa";

type CloseModalType = React.FC<{
  setShowModal: SetBoolean;
}>;

const CloseModal: CloseModalType = ({ setShowModal }) => {
  const handleModal = () => {
    document.body.setAttribute("style", ``);
    setShowModal(false);
  };
  return (
    <div className="w-full flex flex-row justify-end">
      <button className="focus:outline-none text-3xl" onClick={handleModal}>
        <FaRegTimesCircle />
      </button>
    </div>
  );
};
export default CloseModal;
