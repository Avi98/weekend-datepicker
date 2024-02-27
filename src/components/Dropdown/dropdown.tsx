import { ReactNode } from "react";
import { DropdownWrapper } from "./style";

interface IDropdown {
  children: ReactNode;
}
export const Dropdown = ({ children }: IDropdown) => {
  return <DropdownWrapper>{children}</DropdownWrapper>;
};
