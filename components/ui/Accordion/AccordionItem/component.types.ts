import React from "react";

type AccordionItemProps = {
  /**
   * Label of the accordion item
   */
  label: React.ReactElement | React.ReactNode;
  /**
   * Content of the accordion item
   */
  children: React.ReactElement | React.ReactNode;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type AccordionItemProps };
