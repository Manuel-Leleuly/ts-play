import React, { useEffect, useState } from "react";
import VideoModal from "./VideoModal";
import TrailerBackdrop from "../Global/TrailerBackdrop";
import { BsCaretRight } from "react-icons/bs";

type TrailerType = React.FC<{
  trailerBackdrop: string | null;
  trailerUrl: string | null;
}>;

const Trailer: TrailerType = ({ trailerBackdrop, trailerUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    document.body.setAttribute("style", `position: fixed; left: 0; right: 0;`);
    setShowModal(true);
  };

  return (
    <>
      <button
        className="w-full h-41 rounded-xl max-w-trailer focus:outline-none overflow-hidden relative trailer"
        onClick={handleModal}
      >
        <TrailerBackdrop backdropUrl={trailerBackdrop} />
        <div className="absolute z-20 bottom-0 mx-7 mb-7.5 capitalize flex flex-row justify-start items-center">
          <BsCaretRight size={18} />
          <p className="ml-3 font-medium text-lg text-white">watch trailer</p>
        </div>
      </button>
      {showModal && <VideoModal setShowModal={setShowModal} url={trailerUrl} />}
    </>
  );
};
export default Trailer;
