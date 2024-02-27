import { ChangeEventHandler, ReactNode, forwardRef } from "react";
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
  calendarIcon?: ReactNode;
}

export const DateInput = forwardRef<HTMLInputElement, IDateInput>(
  (
    {
      onChange,
      value,
      separator = "-",
      formate = "dd-mm-yyyy",
      placeholder,
      calendarIcon,
    },
    ref
  ) => {
    const defaultPlaceholder = `${formate} ${separator} ${formate}`;

    const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      // @TODO
      onChange({ dates: [""], weekends: [""] });
    };

    return (
      <Input
        ref={ref}
        value={value}
        handleChange={handleInputChange}
        placeholder={placeholder || defaultPlaceholder}
        rightIcon={<CalendarDays height={20} width={20} />}
      />
    );
  }
);

DateInput.displayName = "DateInput";
