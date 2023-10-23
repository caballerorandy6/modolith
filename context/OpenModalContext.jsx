"use client";

import { createContext, useState } from "react";

//Context
const OpenModalContext = createContext();

const OpenModalProvider = ({ children }) => {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <OpenModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  );
};

export { OpenModalProvider };
export default OpenModalContext;
