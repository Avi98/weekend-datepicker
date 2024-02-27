import { styled } from "@linaria/react";
import { ReactElement } from "react";
import { Overlay } from "react-overlays";
import { OverlayProps } from "react-overlays/cjs/Overlay";

interface IOverlay extends Omit<OverlayProps, "children"> {
  calendarPopup: () => ReactElement;
  onHide: VoidFunction;
  containerRef: React.RefObject<HTMLDivElement> | null;
  triggerRef: React.RefObject<HTMLDivElement> | null;
}

const OverlayContainer = styled.div`
  position: absolute;
`;

export const Popper = ({
  placement = "bottom",
  show,
  onHide,
  containerRef,
  triggerRef,
  calendarPopup,
}: IOverlay) => {
  return (
    <Overlay
      show={show}
      rootClose
      offset={[0, 10]}
      onHide={onHide}
      placement={placement}
      container={containerRef}
      target={triggerRef}
    >
      {({ props }) => (
        <OverlayContainer {...props}>{calendarPopup()}</OverlayContainer>
      )}
    </Overlay>
  );
};
