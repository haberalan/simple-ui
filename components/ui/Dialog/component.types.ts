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
  /**
   * Additional classNames
   */
  className?: string;
};

export { type DialogProps };
