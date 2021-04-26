import { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

type TrailerBackdropType = React.FC<{
  backdropUrl: string | null;
}>;

export const TrailerBackdrop: TrailerBackdropType = ({ backdropUrl }) => {
  const [backdropLoading, setBackdropLoading] = useState(true);
  useEffect(() => {
    setBackdropLoading(true);
  }, [backdropUrl]);
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 ${
          backdropLoading || !backdropUrl ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-full flex flex-row justify-center items-center">
          <LoadingAnimation size={10} />
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 ${
          backdropLoading || !backdropUrl ? "hidden" : "block"
        } trailer`}
      >
        {backdropUrl && (
          <img
            src={backdropUrl}
            alt={`movie backdrop`}
            onLoad={() => setBackdropLoading(false)}
            className={`object-cover block absolute top-0 h-full w-screen`}
          />
        )}
      </div>
    </>
  );
};
export default TrailerBackdrop;
