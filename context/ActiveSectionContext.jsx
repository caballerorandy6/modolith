"use client";

import { createContext, useState } from "react";
import { navbar } from "@/lib/arrays";

//Context
const ActiveSectionContext = createContext();

const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export { ActiveSectionProvider };

export default ActiveSectionContext;
