type SheetProps = {
  /**
   * Sheet open state
   */
  open: boolean;
  /**
   * Sheet handeClose function event
   */
  handleClose: () => void;
  /**
   * Sheet contents
   */
  children: React.ReactNode;
  /**
   * Sheet direction from which it opens
   */
  direction?: "left" | "right";
  /**
   * Additional classNames
   */
  className?: string;
};

export { type SheetProps };
