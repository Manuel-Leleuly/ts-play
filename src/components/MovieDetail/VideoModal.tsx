import React from "react";
import { SetBoolean } from "../../shared/Types";
import ReactPlayer from "react-player";
import CloseModal from "../Global/CloseModal";
import DataErrorText from "../Global/DataErrorText";
import { DATA_ERROR, TEXT_ALIGN } from "../../shared/Constants";

type VideoModalType = React.FC<{
  setShowModal: SetBoolean;
  url: string | null;
}>;

const VideoModal: VideoModalType = ({ setShowModal, url }) => {
  return (
    <div className="modal">
      <div className="bg-transparent w-full px-4 md:px-0 md:w-110 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CloseModal setShowModal={setShowModal} />
        <div className="px-0 md:px-10 py-0 md:py-5 w-full md:w-110">
          {url ? (
            <ReactPlayer
              url={url}
              controls
              width="100%"
              onError={() => console.log(`there's error on the video`)} // temporary error handling
            />
          ) : (
            <DataErrorText
              dataError={DATA_ERROR.TRAILER}
              textAlignment={TEXT_ALIGN.CENTER}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default VideoModal;
