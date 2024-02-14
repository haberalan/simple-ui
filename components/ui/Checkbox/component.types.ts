type CheckboxProps = {
  /**
   * Checkbox checked state
   */
  checked: boolean;
  /**
   * Checkbox onClick event
   */
  onClick: () => void;
  /**
   * Checkbox label
   */
  children?: React.ReactElement | React.ReactNode;
  /**
   * Checkbox disabled state
   */
  disabled?: boolean;
};

export { type CheckboxProps };
