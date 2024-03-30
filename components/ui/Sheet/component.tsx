"use client";

// region Imports
import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { SheetProps } from "./component.types";
import { SheetStyles } from "./component.styles";
import { ScaleContext } from "../ScaleProvider/component";
// endregion

// region Constants
const ANIMATIONS = {
  right: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
  },
  left: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
};
// endregion

// region Component
/**
 * @name Sheet
 * @param {SheetProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Sheet: React.FC<SheetProps> = (props) => {
  const refOverlay = useRef<HTMLDivElement>(null);

  const { setScale } = useContext(ScaleContext);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === refOverlay.current) {
      props.handleClose();
    }
  };

  useEffect(() => {
    if (props.open) {
      setScale(0.95);
    } else {
      setScale(1);
    }
  }, [setScale, props.open]);

  return createPortal(
    <AnimatePresence>
      {props.open && (
        <>
          <motion.div
            ref={refOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.15 }}
            onClick={handleClick}
            className="fixed left-0 top-0 z-20 size-full bg-white/5 backdrop-blur-sm dark:bg-gray-900/5"
          ></motion.div>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={ANIMATIONS[props.direction ?? "right"]}
            transition={{ ease: "easeInOut", duration: 0.3 }}
            className={SheetStyles({ direction: props.direction ?? "right" })}
          >
            {props.children}
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};
// endregion

export default Sheet;
