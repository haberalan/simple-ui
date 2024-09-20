import { Dispatch, SetStateAction } from "react";

type TimePickerProps = {
  /**
   * The value of the time picker
   */
  value: { hour: number; minute: number };
  /**
   * The function to set the value of the time picker
   */
  setValue: Dispatch<SetStateAction<{ hour: number; minute: number }>>;
  /**
   * Whether the time picker is disabled
   */
  disabled?: boolean;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type TimePickerProps };
