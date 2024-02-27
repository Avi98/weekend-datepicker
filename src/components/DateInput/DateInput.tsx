import { ChangeEventHandler, forwardRef } from "react";
//@Todo remove dependency use svg icon only
import { CalendarDays } from "lucide-react";
import Input from "../Input";

type OnChangeResponse = {
  dates: string[];
  weekends: string[];
};
type OnChangeType = (dates: OnChangeResponse) => void;

interface IDateInput {
  onChange: OnChangeType;
  separator?: string;
  placeholder?: string;
  value: string;
  formate?: string;
}

export const DateInput = forwardRef<HTMLInputElement, IDateInput>(
  (
    { onChange, value, separator = "-", formate = "dd-mm-yyyy", placeholder },
    ref
  ) => {
    const defaultPlaceholder = `${formate} ${separator} ${formate}`;

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      console.log(event);
      onChange;
    };

    return (
      <Input
        handleChange={handleInputChange}
        placeholder=""
        value=""
        rightIcon={<CalendarDays height={20} width={20} />}
      />
    );
  }
);

DateInput.displayName = "DateInput";
