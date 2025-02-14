"use client";

// region Imports
import { useState } from "react";
import IconButton from "../IconButton";
import { CalendarProps } from "./component.types";
import { CalendarDayStyles, CalendarStyles } from "./component.styles";
// endregion

// region Constants
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// endregion

// region Component
/**
 * @name Calendar
 * @param {CalendarProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Calendar: React.FC<CalendarProps> = (props) => {
  const [selectedYear, setSelectedYear] = useState(
    props.year ?? new Date().getFullYear(),
  );
  const [selectedMonth, setSelectedMonth] = useState(
    props.month ?? new Date().getMonth(),
  );

  const adjustedDays =
    props.startOfWeek === "Monday" ? [...DAYS.slice(1), DAYS[0]] : DAYS;

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();

  let firstDayOfMonth = new Date(selectedYear, selectedMonth, 1).getDay();
  if (props.startOfWeek === "Monday") {
    firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Adjust for Monday start
  }
  const daysInCurrentMonth = getDaysInMonth(selectedYear, selectedMonth);
  const daysInPreviousMonth = getDaysInMonth(selectedYear, selectedMonth - 1);

  const prevMonthDaysToShow = Array.from(
    { length: firstDayOfMonth },
    (_, i) => ({
      day: daysInPreviousMonth - i,
      date: new Date(selectedYear, selectedMonth - 1, daysInPreviousMonth - i),
      dayOfWeek: (firstDayOfMonth - 1 - i + 7) % 7,
      fromPreviousMonth: true,
    }),
  ).reverse();

  const currentMonthDaysToShow = Array.from(
    { length: daysInCurrentMonth },
    (_, i) => ({
      day: i + 1,
      date: new Date(selectedYear, selectedMonth, i + 1),
      dayOfWeek: new Date(selectedYear, selectedMonth, i + 1).getDay(),
      fromCurrentMonth: true,
    }),
  );

  const lastDayOfMonth = new Date(
    selectedYear,
    selectedMonth,
    daysInCurrentMonth,
  ).getDay();
  const nextMonthDaysToShow = Array.from(
    {
      length:
        props.startOfWeek === "Monday"
          ? (7 - lastDayOfMonth) % 7
          : 6 - lastDayOfMonth,
    },
    (_, i) => ({
      day: i + 1,
      date: new Date(selectedYear, selectedMonth + 1, i + 1),
      dayOfWeek: i,
      fromNextMonth: true,
    }),
  );

  const daysToShow: {
    day: number;
    date: Date;
    dayOfWeek: number;
    fromPreviousMonth?: boolean;
    fromCurrentMonth?: boolean;
    fromNextMonth?: boolean;
  }[] = [
    ...prevMonthDaysToShow,
    ...currentMonthDaysToShow,
    ...nextMonthDaysToShow,
  ];

  const incrementMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  const decrementMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  return (
    <div className={CalendarStyles(props.className)}>
      <div className="flex w-full items-center justify-between">
        <IconButton
          onClick={decrementMonth}
          icon="chevron-left"
          size="sm"
          variant="tertiary"
        />
        <p className="w-[160px] text-center text-sm font-500">
          {MONTHS[selectedMonth]} {selectedYear}
        </p>
        <IconButton
          onClick={incrementMonth}
          icon="chevron-right"
          size="sm"
          variant="tertiary"
        />
      </div>
      <div className="grid w-full grid-cols-7 text-xs text-gray-400 dark:text-gray-700">
        {adjustedDays.map((day) => (
          <div key={day} className="py-2 text-center">
            {day.slice(0, 2)}
          </div>
        ))}
      </div>
      <div className="grid w-full grid-cols-7 gap-1 text-sm">
        {daysToShow.map((day) => (
          <button
            key={day.date.toString() + day.fromCurrentMonth}
            className={CalendarDayStyles({
              currentMonth: !!day.fromCurrentMonth,
              selected: props.value?.toDateString() === day.date.toDateString(),
              disabled: !!props.disabled,
            })}
            onClick={() => !props.disabled && props.setValue(day.date)}
          >
            {day.day}
          </button>
        ))}
      </div>
    </div>
  );
};
// endregion

export default Calendar;
