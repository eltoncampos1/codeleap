import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

export const useApp = () => useContext(AppContext)