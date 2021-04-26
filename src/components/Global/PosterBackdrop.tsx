import { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

type PosterBackdropType = React.FC<{
  posterUrl: string;
  movieTitle: string;
}>;

const PosterBackdrop: PosterBackdropType = ({ posterUrl, movieTitle }) => {
  const [backdropLoading, setBackdropLoading] = useState(true);
  useEffect(() => {
    setBackdropLoading(true);
  }, []);
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <div
          className={`w-full h-full ${
            backdropLoading ? "flex" : "hidden"
          } flex-row justify-center items-center`}
        >
          <LoadingAnimation size={10} />
        </div>
      </div>
      <div className="absolute top-0 left-0 bottom-0 right-0">
        <img
          src={posterUrl}
          alt={movieTitle}
          width="200px"
          height="300px"
          onLoad={() => setBackdropLoading(false)}
          className={`object-fill ${
            backdropLoading ? "hidden" : "block"
          } absolute top-0`}
        />
      </div>
    </>
  );
};
export default PosterBackdrop;
