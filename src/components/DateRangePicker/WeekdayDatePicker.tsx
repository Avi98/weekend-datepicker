import { useState } from "react";
import PopperTriggerProvider from "../Popper/PopperTrigger";
import DateInput from "../DateInput";

interface IWeekdayDatePicker {
  formate?: string;
  placeholder?: string;
  inputSeparator?: string;
}
export const DateRangePicker = ({
  formate,
  placeholder,
  inputSeparator,
}: IWeekdayDatePicker) => {
  //   const [startDate, setStartDate] = React.useState(null);
  //   const [endDate, setStartDate] = React.useState(null);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // State for displayed month and year
  const [displayedMonth, setDisplayedMonth] = useState(new Date().getMonth());
  const [displayedYear, setDisplayedYear] = useState(new Date().getFullYear());

  const handleDateSelect = (date) => {
    // Logic to handle selecting start and end dates
  };

  // Function to handle changing the month
  const changeMonth = (increment) => {
    // Logic to change the displayed month
  };

  // Function to handle changing the year
  const changeYear = (increment) => {
    // Logic to change the displayed year
  };

  // Function to render the calendar interface
  const renderCalendar = () => {
    // Logic to generate the calendar UI
    return <div>hi</div>;
  };

  return (
    <PopperTriggerProvider calendarPopup={renderCalendar}>
      <DateInput
        value={""}
        onChange={handleDateSelect}
        placeholder={placeholder}
        formate={formate}
      />
    </PopperTriggerProvider>
  );
};
