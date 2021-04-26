import React from "react";

type ConnectionErrorType = React.FC<{
  errorMessage: string;
  status?: number;
}>;

const ConnectionError: ConnectionErrorType = ({ errorMessage, status }) => {
  return (
    <div className="w-full flex flex-row items-center justify-center top-1/2 transform  relative">
      <h2 className="text-center text-accel-global-grey-light mb-8">
        {errorMessage} {status && `code ${status}`}
      </h2>
    </div>
  );
};

export default ConnectionError;
