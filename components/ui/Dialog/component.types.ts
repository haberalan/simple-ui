type DialogProps = {
  /**
   * Dialog open state
   */
  open: boolean;
  /**
   * Dialog close handler
   */
  handleClose: () => void;
  /**
   * Dialog contents
   */
  children: React.ReactElement;
};

export { type DialogProps };
