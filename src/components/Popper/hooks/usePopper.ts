import { useContext } from "react";
import { PopperTriggerContext } from "../PopperTrigger";

export const usePopper = () => {
  const popperContext = useContext(PopperTriggerContext);
  if (!popperContext)
    throw new Error("usePopper should only be used in side PopperProvider");

  return popperContext;
};
