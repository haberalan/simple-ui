type TooltipProps = {
  /**
   * The content of the tooltip.
   */
  content: React.ReactNode;
  /**
   * The children of the tooltip.
   */
  children: React.ReactNode;
  /**
   * Delay of the tooltip.
   */
  delay?: number;
  /**
   * The direction of the tooltip.
   */
  direction?: "top" | "bottom";
  /**
   * Additional classNames
   */
  className?: string;
};

export { type TooltipProps };
