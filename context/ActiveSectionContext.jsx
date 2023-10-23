"use client";

import { createContext, useState } from "react";

//Context
const ActiveSectionContext = createContext();

const ActiveSectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
        isOpen,
        closeModal,
        openModal,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export { ActiveSectionProvider };
export default ActiveSectionContext;
