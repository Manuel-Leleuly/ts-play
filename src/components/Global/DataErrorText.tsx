type DataErrorTextType = React.FC<{
  dataError: string;
  textAlignment: string;
}>;

const DataErrorText: DataErrorTextType = ({ dataError, textAlignment }) => {
  return (
    <div
      className={`w-full text-accel-global-grey-light-4 flex flex-row justify-center items-center dark:text-white text-${textAlignment}`}
    >
      <p>My apologies, {dataError}&#160;&#160;</p>
    </div>
  );
};
export default DataErrorText;
