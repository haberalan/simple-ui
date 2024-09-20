"use client";

// region Imports
import React, { createContext, useState } from "react";
import { AccordionContextProps, AccordionProps } from "./component.types";
import { AccordionStyles } from "./component.styles";
// endregion

// region Context
/**
 * @name AccordionContext
 * @description The context of the accordion
 * @type {React.Context<AccordionContextProps>}
 */
const AccordionContext = createContext<AccordionContextProps>({
  isOpen: () => false,
  toggle: () => {},
});
// endregion

// region Component
/**
 * @name Accordion
 * @param {AccordionProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Accordion: React.FC<AccordionProps> = (props) => {
  const [open, setOpen] = useState<string[]>([]);

  const isOpen = (id: string) => open.includes(id);

  const toggle = (id: string) => {
    if (open.includes(id)) {
      setOpen((prev) => prev.filter((item) => item !== id));
    } else {
      setOpen((prev) => (props.multiple ? [...prev, id] : [id]));
    }
  };

  return (
    <AccordionContext.Provider
      value={{
        isOpen,
        toggle,
      }}
    >
      <div className={AccordionStyles(props.className)}>{props.children}</div>
    </AccordionContext.Provider>
  );
};
// endregion

export { AccordionContext };
export default Accordion;
