"use client";

// region Imports
import React, { useContext, useId } from "react";
import { TabsNavProps } from "./component.types";
import { AnimatePresence, motion } from "framer-motion";
import { TabsContext } from "../component";
import {
  TabsNavInnerWrapper,
  TabsNavStyles,
  TabsNavWrapper,
} from "./component.styles";
// endregion

// region Component
/**
 * @name TabsNav
 * @param {TabsNavProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const TabsNav: React.FC<TabsNavProps> = (props) => {
  const id = useId();
  const ctxTabs = useContext(TabsContext);

  return (
    <div className={TabsNavWrapper(props.className)}>
      {ctxTabs.labels.map((item) => (
        <motion.div
          key={item}
          onClick={ctxTabs.updateActive.bind(this, item)}
          className={TabsNavInnerWrapper(props.itemClassName)}
        >
          {item}
          <AnimatePresence mode="wait" initial={false}>
            {item === ctxTabs.active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layoutId={id}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={TabsNavStyles({ variant: props.variant })}
              />
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};
// endregion

export default TabsNav;
