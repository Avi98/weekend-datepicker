import { useState } from "react";
import DateInput from "../DateInput";
import Dropdown from "../Dropdown";
import PopperTriggerProvider from "../Popper";
import { DateRangeHeader } from "./DateRangeHeader/DateRangeHeader";

interface IWeekdayDatePicker {
  formate?: string;
  placeholder?: string;
  inputSeparator?: string;
}
export const DateRangePicker = ({
  formate = "dd-mm-yyyy",
  placeholder,
  inputSeparator = `~`,
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
    return (
      <Dropdown>
        <DateRangeHeader
          formate={formate}
          separator={inputSeparator}
          dates={[startDate, endDate]}
        />
        {/* <Calendar /> */}
        {/* OK button */}
      </Dropdown>
    );
  };

  return (
    <PopperTriggerProvider calendarPopup={renderCalendar}>
      <DateInput
        value={""}
        formate={formate}
        onChange={handleDateSelect}
        separator={inputSeparator}
        placeholder={placeholder}
      />
    </PopperTriggerProvider>
  );
};
