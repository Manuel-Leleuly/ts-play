import React from "react";
import { API, PROFILE_SIZE } from "../../shared/Constants";
import { Cast } from "../../shared/Types";

export type CastCardType = React.FC<{
  cast: Cast;
}>;

const CastCard: CastCardType = ({ cast }) => {
  const getProfilePicture = `${API.IMAGE_BASE_URL}${PROFILE_SIZE.W45}${cast.profile_path}`;

  return (
    <div className="flex flex-row justify-start item-center mb-7">
      <div className="h-13 w-13 mr-6 rounded-full bg-white overflow-hidden">
        {cast.profile_path ? (
          <img
            src={getProfilePicture}
            alt={cast.name}
            className="block mx-auto"
            width="52px"
            height="52px"
          />
        ) : (
          <h2>n/a</h2>
        )}
      </div>
      <div>
        <p className="capitalize text-base font-medium">{cast.name}</p>
        <p className="capitalize text-base font-light">{cast.character}</p>
      </div>
    </div>
  );
};
export default CastCard;
