import React from "react";

type AccordionContextProps = {
  /**
   * Function that checks if accordion is open
   */
  isOpen: (id: string) => boolean;
  /**
   * Function that toggles accordion
   */
  toggle: (id: string) => void;
};

type AccordionProps = {
  /**
   * Accordion contents
   */
  children: React.ReactNode | React.ReactElement;
  /**
   * Sets possibility to open multiple accordions
   */
  multiple?: boolean;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type AccordionProps, type AccordionContextProps };
