"use client";

// region Imports
import React from "react";
import { IconButtonProps } from "./component.types";
import { IconButtonStyles, LinkStyles } from "./component.styles";
import { AnimatePresence, motion } from "framer-motion";
import { Icon, Link, Loader } from "..";
// endregion

// region Component
/**
 * @name IconButton
 * @param {IconButtonProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const IconButton: React.FC<IconButtonProps> = (props) => {
  const { variant = "primary", size = "md" } = props;

  const content = (
    <>
      <AnimatePresence initial={false}>
        {props.loading && (
          <motion.div
            className="absolute top-1/2 flex size-6 -translate-y-1/2 items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.15 }}
          >
            <Loader size="sm" />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: props.loading ? 0 : 1,
          }}
          transition={{ ease: "easeInOut", duration: 0.15 }}
        >
          <Icon name={props.icon} className="size-5 shrink-0" />
        </motion.div>
      </AnimatePresence>
    </>
  );

  if (props.href)
    return (
      <Link
        className={LinkStyles({ disabled: !!props.disabled }, props.className)}
        href={props.href}
        tabIndex={props.disabled ? -1 : 0}
      >
        <div className={IconButtonStyles({ variant, size }, props.className)}>
          {content}
        </div>
      </Link>
    );

  return (
    <button
      className={IconButtonStyles({ variant, size }, props.className)}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      type={props.type ?? "button"}
      tabIndex={props.href ? -1 : 0}
    >
      {content}
    </button>
  );
};
// endregion

export default IconButton;
