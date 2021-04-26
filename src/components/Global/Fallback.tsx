import LoadingAnimation from "./LoadingAnimation";

const Fallback = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-accel-body-dark flex flex-row justify-center items-center">
      <LoadingAnimation size={20} />
    </div>
  );
};
export default Fallback;
