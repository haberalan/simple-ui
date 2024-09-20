type OptionType = {
  /**
   * Value of the option
   */
  label: string;
  /**
   * Sets the option as disabled
   */
  disabled?: boolean;
};

type MultipleSelectProps = {
  /**
   * Sets the select as multiple
   */
  multiple: true;
  /**
   * Value of the option
   */
  value: string[];
};

type SingleSelectProps = {
  /**
   * Sets the select as multiple
   */
  multiple?: false;
  /**
   * Value of the option
   */
  value: string;
};

type SelectProps = {
  /**
   * Options of the select
   */
  options: OptionType[];
  /**
   * Status of the select
   */
  status: "valid" | "error" | "default";
  /**
   * Select onChange event
   */
  onChange: (e: string) => void;
  /**
   * Select onBlur event
   */
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
  /**
   * If true adds search to the select dropdown
   */
  search?: boolean;
  /**
   * If true sets select as multiple
   */
  multiple?: boolean;
  /**
   * Label of the select
   */
  label?: string;
  /**
   * Placeholder of the select
   */
  placeholder?: string;
  /**
   * If true sets select as disabled
   */
  disabled?: boolean;
  /**
   * Helper text of the select
   */
  helperText?: string;
  /**
   * Error text of the select
   */
  errorText?: string;
  /**
   * Sets auto focus to the select
   */
  autoFocus?: boolean;
  /**
   * Additional classNames
   */
  className?: string;
} & (MultipleSelectProps | SingleSelectProps);

export { type SelectProps, type OptionType };
