type SwitchProps = {
  /**
   * Switch checked state
   */
  checked: boolean;
  /**
   * Switch onClick event
   */
  onClick: () => void;
  /**
   * Switch label
   */
  children?: React.ReactNode;
  /**
   * Switch disabled
   */
  disabled?: boolean;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type SwitchProps };
