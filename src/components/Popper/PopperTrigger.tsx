import {
  ElementType,
  ReactElement,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useRef,
  useState,
} from "react";
import { Popper } from "./Popper";

export const PopperTriggerContext = createContext({});

interface IPopperTrigger {
  children: ReactElement<HTMLDivElement>;
  calendarPopup: () => ReactElement;
  container?: ElementType;
}

export const PopperTriggerProvider = (props: IPopperTrigger) => {
  const { calendarPopup, container: Wrapper = "div" } = props;

  const [show, setShow] = useState(false);

  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  const { children } = props;

  const trigger =
    children &&
    isValidElement(children) &&
    cloneElement<ReactElement<HTMLDivElement>>(children, {});

  const toggle = useCallback(() => {
    setShow((state) => !state);
  }, []);

  return (
    <PopperTriggerContext.Provider value={{}}>
      <Wrapper ref={containerRef}>
        <div ref={triggerRef} onClick={toggle}>
          {trigger}
        </div>
        <Popper
          onHide={toggle}
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
