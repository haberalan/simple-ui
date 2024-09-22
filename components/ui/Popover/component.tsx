"use client";

// region Imports
import React, { cloneElement, useEffect, useRef } from "react";
import { PopoverProps } from "./component.types";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { usePosition } from "@/hooks";
// endregion

// region Component
/**
 * @name Popover
 * @param {PopoverProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Popover: React.FC<PopoverProps> = (props) => {
  const refMenu = useRef<HTMLDivElement>(null);
  const { active, handleOpen, handleLeave, styles } = usePosition({
    ref: refMenu,
    direction: props.direction ?? "bottom",
  });

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (refMenu.current && !refMenu.current.contains(e.target as Node))
        handleLeave();
    };

    if (active) {
      window.addEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleLeave, active]);

  const onClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    handleOpen(e as React.MouseEvent<HTMLElement>);
  };

  return (
    <>
      {cloneElement(props.triggerComponent, {
        onClick,
      })}
      {createPortal(
        <AnimatePresence>
          {active && (
            <motion.div
              ref={refMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
              style={{
                ...styles,
              }}
            >
              <motion.div
                initial={{ y: 4, scale: 0.8 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                {props.children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};
// endregion

export default Popover;
