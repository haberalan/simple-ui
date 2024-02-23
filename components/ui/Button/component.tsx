"use client";

// region Imports
import React from "react";
import { ButtonProps } from "./component.types";
import { ButtonStyles, IconStyles, LinkStyles } from "./component.styles";
import { Icon, Link, Loader } from "..";
import { AnimatePresence, motion } from "framer-motion";
// endregion

// region Componnet
/**
 * @name Button
 * @param {ButtonProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Button: React.FC<ButtonProps> = (props) => {
  const content = (
    <button
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      type={props.type ?? "button"}
      tabIndex={props.href ? -1 : 0}
      className={ButtonStyles({ variant: props.variant, size: props.size })}
    >
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
          className="flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{
            opacity: props.loading ? 0 : 1,
          }}
          transition={{ ease: "easeInOut", duration: 0.15 }}
        >
          {props.icon && !props.loading && (
            <Icon
              name={props.icon}
              className={IconStyles({ position: props.iconPosition ?? "left" })}
            />
          )}
          {props.children}
        </motion.div>
      </AnimatePresence>
    </button>
  );

  if (props.href)
    return (
      <Link
        className={LinkStyles({ disabled: !!props.disabled })}
        href={props.href}
        tabIndex={props.disabled ? -1 : 0}
      >
        {content}
      </Link>
    );

  return content;
};
// endregion

export default Button;
