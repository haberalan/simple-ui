import { IconName } from "@/assets/icons";

type InputProps = {
  /**
   * Input value
   */
  value?: string;
  /**
   * Input status
   */
  status?: "valid" | "error" | "default";
  /**
   * Input onChange event
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Input onBlur event
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /**
   * Adds icon to the input
   */
  icon?: IconName;
  /**
   * Icon position
   */
  iconPositon?: "left" | "right";
  /**
   * Icon onClick event
   */
  onIconClick?: () => void;
  /**
   * Input type
   */
  type?: "text" | "number" | "password" | "email";
  /**
   * Input label
   */
  label?: string;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input disabled
   */
  disabled?: boolean;
  /**
   * Input helper text
   */
  helperText?: string;
  /**
   * Input error text
   */
  errorText?: string;
  /**
   * Input auto focous
   */
  autoFocus?: boolean;
  /**
   * Hides the helper text wrapper
   */
  hideHelper?: boolean;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type InputProps };
