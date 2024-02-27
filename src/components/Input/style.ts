import { styled } from "@linaria/react";
import { Flex, RowStack } from "../Styles";

export const InputContainer = styled(RowStack)`
  gap: 0.5rem;
  cursor: pointer;
  border-radius: 2px;

  box-sizing: border-box;
  border: 0.1rem solid var(--border-color);
  background-color: var(--bg-body);
`;

export const InputIcon = styled(Flex)`
  align-items: "center";
  padding: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0.5rem;
`;
