"use client";

// region Imports
import React, { forwardRef, useId } from "react";
import { InputProps } from "./component.types";
import {
  InputStyles,
  IconStyles,
  LabelStyles,
  HelperStyles,
} from "./component.styles";
import { Icon } from "..";
import { AnimatePresence, motion } from "framer-motion";
// endregion

// region Component
/**
 * @name Input
 * @param {InputProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const id = useId();

  const status = props.disabled ? "disabled" : (props.status ?? "default");
  const text = {
    error: props.errorText,
    default: props.helperText,
    disabled: "",
    valid: "",
  }[props.status ?? "default"];

  const icon = props.icon ? (props.iconPositon ?? "right") : "none";

  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex flex-col-reverse gap-1">
        <input
          ref={ref}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          type={props.type ?? "text"}
          id={id}
          disabled={props.disabled}
          placeholder={props.placeholder}
          autoFocus={props.autoFocus}
          className={InputStyles({ status, icon }, props.className)}
        />
        {props.icon && (
          <Icon
            onClick={props.onIconClick}
            name={props.icon}
            className={IconStyles({
              status,
              icon,
              targetable: !!props.onIconClick,
            })}
          />
        )}
        {props.label && (
          <label htmlFor={id} className={LabelStyles({ status })}>
            {props.label}
          </label>
        )}
      </div>
      {!props.hideHelper && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            initial={{ opacity: 0, y: "-4px" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-4px" }}
            transition={{ duration: 0.125 }}
            key={status}
            className="h-4"
          >
            <p className={HelperStyles({ status })}>{text}</p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
});
// endregion

Input.displayName = "Input";

export default Input;
