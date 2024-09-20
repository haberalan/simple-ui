"use client";

// region Imports
import React, { forwardRef, useId } from "react";
import { TextareaProps } from "./component.types";
import { TextareaStyles, LabelStyles, HelperStyles } from "./component.styles";
import { AnimatePresence, motion } from "framer-motion";
// endregion

// region Component
/**
 * @name Textarea
 * @param {TextareaProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const id = useId();

    const status = props.disabled ? "disabled" : (props.status ?? "default");

    const text = {
      error: props.errorText,
      default: props.helperText,
      disabled: "",
      valid: "",
    }[props.status ?? "default"];

    return (
      <div className="flex flex-col gap-1">
        <div className="flex flex-col-reverse gap-1">
          <textarea
            id={id}
            ref={ref}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            disabled={props.disabled}
            placeholder={props.placeholder}
            autoFocus={props.autoFocus}
            rows={props.rows ?? 3}
            maxLength={props.maxLength}
            className={TextareaStyles(
              { status, noResize: !!props.noResize },
              props.className,
            )}
          />
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
              <p
                className={HelperStyles({
                  status,
                  align: props.alignText ?? "left",
                })}
              >
                {text}
              </p>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    );
  },
);
// endregion

Textarea.displayName = "Textarea";

export default Textarea;
