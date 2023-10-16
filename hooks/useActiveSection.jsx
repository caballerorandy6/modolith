import { useContext } from "react";
import ActiveSectionContext from "@/context/ActiveSectionContext";

const useActiveSection = () => {
  return useContext(ActiveSectionContext);
};

export default useActiveSection;
