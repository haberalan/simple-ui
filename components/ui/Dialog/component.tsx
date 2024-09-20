"use client";

// region Imports
import { createPortal } from "react-dom";
import React, { useRef } from "react";
import { DialogProps } from "./component.types";
import { AnimatePresence, motion } from "framer-motion";
import { DialogStyles } from "./component.styles";
// endregion

// region Component
/**
 * @name Dialog
 * @param {DialogProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Dialog: React.FC<DialogProps> = (props) => {
  const refOverlay = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === refOverlay.current) {
      props.handleClose();
    }
  };

  return createPortal(
    <AnimatePresence>
      {props.open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.15 }}
          onClick={handleClick}
          className={DialogStyles(props.className)}
          ref={refOverlay}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ ease: "easeInOut", duration: 0.15 }}
          >
            {props.children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};
// endregion

export default Dialog;
