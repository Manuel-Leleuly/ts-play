import { debounce } from "lodash";
import React, { createContext, useCallback, useState } from "react";

type QueryContent = {
  query: string;
  stringValue: string;
  handleQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const QueryContext = createContext<QueryContent>({
  query: "",
  stringValue: "",
  handleQuery: (event: React.ChangeEvent<HTMLInputElement>) => {},
});

export const QueryProvider: React.FC = ({ children }) => {
  const [query, setQuery] = useState<string>("");
  const [stringValue, setStringValue] = useState<string>("");

  const convertSpaceToPlus = (query: string) => {
    return query.split(" ").join("+");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceQuery = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      const newQuery = event.target.value;
      setQuery(convertSpaceToPlus(newQuery));
    }, 500),
    []
  );

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setStringValue(event.target.value);
    debounceQuery(event);
  };

  const value = { query, handleQuery, stringValue };

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};
