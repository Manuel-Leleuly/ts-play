type ConnectionErrorTextType = React.FC<{
  errorMessage: string;
  textAlignment: string;
}>;

const ConnectionErrorText: ConnectionErrorTextType = (props) => {
  const { errorMessage, textAlignment } = props;
  return (
    <div
      className={`w-full text-accel-global-grey-light-4 text-${textAlignment}`}
    >
      <p>Error: {errorMessage}</p>
    </div>
  );
};
export default ConnectionErrorText;
