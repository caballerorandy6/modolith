import { useContext } from "react";
import OpenModalContext from "@/context/OpenModalContext";

const useOpenModal = () => {
  return useContext(OpenModalContext);
};

export default useOpenModal;
