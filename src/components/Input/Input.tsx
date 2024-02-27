import { ChangeEventHandler, ReactNode, forwardRef } from "react";
import { Input, InputContainer, InputIcon } from "./style";

interface IInput {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  rightIcon?: ReactNode;
  value: string;
  placeholder: string;
}

export const InputComponent = forwardRef<HTMLInputElement, IInput>(
  ({ handleChange, value = "", placeholder, rightIcon }, ref) => {
    return (
      <InputContainer>
        <Input
          ref={ref}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {rightIcon ? <InputIcon>{rightIcon}</InputIcon> : null}
      </InputContainer>
    );
  }
);

InputComponent.displayName = "Input";
