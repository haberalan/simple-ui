type TextareaProps = {
  /**
   * Value of the textarea
   */
  value?: string;
  /**
   * Validation status of the text area
   */
  status?: "valid" | "error" | "default";
  /**
   * Textarea onChange event
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * Textarea onBlur event
   */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * Textarea label
   */
  label?: string;
  /**
   * Textarea placeholder
   */
  placeholder?: string;
  /**
   * Textarea disabled
   */
  disabled?: boolean;
  /**
   * Textarea helperText
   */
  helperText?: string;
  /**
   * Textarea errorText
   */
  errorText?: string;
  /**
   * Textarea align helper text
   */
  alignText?: "left" | "center" | "right";
  /**
   * Textarea auto focus
   */
  autoFocus?: boolean;
  /**
   * Textarea no resize
   */
  noResize?: boolean;
  /**
   * Textarea base rows
   */
  rows?: number;
  /**
   * Textarea max characters
   */
  maxLength?: number;
  /**
   * Additional classNames
   */
  className?: string;
  /**
   * Hides the helper text wrapper
   */
  hideHelper?: boolean;
};

export { type TextareaProps };
