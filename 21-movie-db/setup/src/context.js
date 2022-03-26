import React, { useState, useContext } from "react";
import { useFetch } from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const urlParams = `s=${query}`;

  const { isLoading, data: movies, error } = useFetch(urlParams);

  return (
    <AppContext.Provider value={{ isLoading, movies, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
