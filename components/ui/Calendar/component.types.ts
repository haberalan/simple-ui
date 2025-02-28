type CalendarProps = {
  /**
   * Date value
   */
  value: Date | null;
  /**
   * Date change event
   */
  setValue: (date: Date) => void;
  /**
   * Year to display
   */
  year?: number;
  /**
   * Month to display
   */
  month?: number;
  /**
   * Start of the week
   */
  startOfWeek?: "Sunday" | "Monday";
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type CalendarProps };
