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
};

export { type SwitchProps };
