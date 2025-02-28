import React from "react";
type PopoverProps = {
  /**
   * Custom component that acts as the trigger for the popover.
   */
  triggerComponent: React.ReactElement;
  /**
   * Children of the popover.
   */
  children: React.ReactNode;
  /**
   * The direction of the popover.
   */
  direction?: "top" | "bottom";
};

export { type PopoverProps };
