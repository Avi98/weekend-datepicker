import { ReactNode } from "react";
import { Text } from "./style";

interface ITextComponent {
  children: ReactNode;
}
export const TextComponent = ({ children }: ITextComponent) => {
  return <Text>{children}</Text>;
};
