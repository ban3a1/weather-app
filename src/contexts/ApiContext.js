import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState("");
  const [flip, setFlip] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <StateContext.Provider
      value={{
        data,
        setData,
        flip,
        setFlip,
        search,
        setSearch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
