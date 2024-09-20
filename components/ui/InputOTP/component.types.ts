type InputOTPProps = {
  /**
   * Handle filled event
   */
  handleFilled: (code: string) => Promise<boolean>;
  /**
   * Input disabled
   */
  disabled?: boolean;
};

export { type InputOTPProps };
