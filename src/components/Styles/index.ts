import { styled } from "@linaria/react";

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const FlexCol = styled(Flex)`
  flex-direction: column;
`;

export const RowStack = styled(Flex)`
  justify-content: space-between;
`;

export const ColStack = styled(FlexCol)`
  justify-content: space-between;
`;
