import { useContext } from "react";
import { NavbarContext, NavbarContextType } from "./NavbarContext";

export const useNavbarContext = (): NavbarContextType =>
  useContext(NavbarContext);
