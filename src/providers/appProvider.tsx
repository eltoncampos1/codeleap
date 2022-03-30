import { ReactNode } from "react";
import { AppContext } from "../contexts/appContext"

type TProps = {
  children: ReactNode;
}
export const AppProvider = ({ children }: TProps) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}