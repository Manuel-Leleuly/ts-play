type GenreTextType = React.FC<{
  genreName: string;
  isHeader: boolean;
}>;

const GenreText: GenreTextType = ({ genreName, isHeader }) => {
  return (
    <div
      className={`bg-transparent border-solid border-white py-1 px-2 ${
        isHeader ? "border-2 mr-2 mt-2" : "border"
      }`}
    >
      <p
        className={`uppercase lg:text-xs ${
          isHeader ? "text-xs" : "text-xxs"
        } font-semibold`}
      >
        {genreName}
      </p>
    </div>
  );
};
export default GenreText;
