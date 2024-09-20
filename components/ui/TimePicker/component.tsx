"use client";

// region Imports
import React from "react";
import Icon from "../Icon";
import { TimePickerProps } from "./component.types";
// endregion

// region Component
/**
 * @name TimePicker
 * @param {TimePickerProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const TimePicker: React.FC<TimePickerProps> = (props) => {
  const validateAndFormatTime = (value: string, type: "hour" | "minute") => {
    const num = parseInt(value, 10);
    if (isNaN(num)) return "00";

    let validatedNum = num;
    if (type === "hour") {
      validatedNum = Math.min(23, Math.max(0, num));
    } else if (type === "minute") {
      validatedNum = Math.min(59, Math.max(0, num));
    }

    return validatedNum < 10 ? `0${validatedNum}` : `${validatedNum}`;
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hour = validateAndFormatTime(e.target.value, "hour");
    props.setValue((prev) => ({
      ...prev,
      hour: Number(hour),
    }));
  };

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minute = validateAndFormatTime(e.target.value, "minute");
    props.setValue((prev) => ({
      ...prev,
      minute: Number(minute),
    }));
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-2 border border-gray-300 bg-gray-100 p-2 shadow-sm dark:border-gray-900 dark:bg-black">
      <Icon name="Clock" className="size-6 text-gray-400 dark:text-gray-700" />
      <div className="flex items-center gap-1">
        <input
          type="text"
          value={validateAndFormatTime(props.value.hour.toString(), "hour")}
          onChange={handleHourChange}
          disabled={props.disabled}
          className="w-9 rounded-1 border border-gray-300 bg-white p-1 text-center text-sm font-500 disabled:text-gray-400 dark:border-gray-900 dark:bg-gray-1000 disabled:dark:text-gray-700"
        />
        <div className="pointer-events-none text-lg font-800">:</div>
        <input
          type="text"
          value={validateAndFormatTime(props.value.minute.toString(), "minute")}
          onChange={handleMinuteChange}
          disabled={props.disabled}
          className="w-9 rounded-1 border border-gray-300 bg-white p-1 text-center text-sm font-500 disabled:text-gray-400 dark:border-gray-900 dark:bg-gray-1000 disabled:dark:text-gray-700"
        />
      </div>
    </div>
  );
};
// endregion

export default TimePicker;
