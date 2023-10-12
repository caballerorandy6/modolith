"use client";

import { useState, createContext } from "react";

const ModolithContext = createContext();

const ModolithProvider = ({ children }) => {
  return (
    <ModolithContext.Provider value={{}}>{children}</ModolithContext.Provider>
  );
};

export { ModolithProvider };

export default ModolithContext;
