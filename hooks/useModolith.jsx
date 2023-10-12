import { useContext } from "react";
import ModolithContext from "@/context/ModolithProvider";

const useModolith = () => {
  return useContext(ModolithContext);
};

export default useModolith;
