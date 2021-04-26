import React, { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

type HeaderBackdropType = React.FC<{
  backdropUrl: string | null;
}>;

const HeaderBackdrop: HeaderBackdropType = ({ backdropUrl }) => {
  const [backdropLoading, setBackdropLoading] = useState(true);
  useEffect(() => {
    setBackdropLoading(true);
  }, [backdropUrl]);
  return (
    <div className="absolute poster z-0 w-full h-accel-carousel-mobile overflow-hidden left-0 top-0 bg-transparent">
      <div
        className={`w-full h-full items-center ${
          backdropLoading || !backdropUrl ? "flex" : "hidden"
        } flex-row justify-center`}
      >
        <LoadingAnimation size={10} />
      </div>
      <div
        className={`w-screen ${
          backdropLoading || !backdropUrl ? "hidden" : "block"
        } poster`}
      >
        {backdropUrl && (
          <img
            src={backdropUrl}
            alt={`header backdrop`}
            onLoad={() => setBackdropLoading(false)}
            className={`object-cover block min-w-full min-h-screen`}
            width="100%"
            height="100vh"
          />
        )}
      </div>
    </div>
  );
};
export default HeaderBackdrop;
