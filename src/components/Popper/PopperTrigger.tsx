import {
  ElementType,
  ReactElement,
  ReactNode,
  createContext,
  useRef,
  useState,
} from "react";
import { Popper } from "./Popper";

export const PopperTriggerContext = createContext({});

interface IPopperTrigger {
  children: ReactNode;
  calendarPopup: () => ReactElement;
  container?: ElementType;
}

export const PopperTriggerProvider = (props: IPopperTrigger) => {
  const { calendarPopup, container: Wrapper = "div" } = props;

  const [show, setShow] = useState(false);

  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  return (
    <PopperTriggerContext.Provider value={{}}>
      <Wrapper ref={containerRef}>
        <div ref={triggerRef} onClick={() => setShow((state) => !state)}>
          {props.children}
        </div>
        <Popper
          onHide={() => {
            setShow((state) => !state);
          }}
          show={show}
          target={triggerRef.current}
          calendarPopup={calendarPopup}
          triggerRef={triggerRef.current}
          containerRef={containerRef.current}
        />
      </Wrapper>
    </PopperTriggerContext.Provider>
  );
};
