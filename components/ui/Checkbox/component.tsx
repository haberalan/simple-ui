"use client";

// region Imports
import React from "react";
import { CheckboxProps } from "./component.types";
import { Icon } from "..";
import { AnimatePresence, motion } from "framer-motion";
import { CheckboxStyles, IconStyles, LabelStyles } from "./component.styles";
// endregion

// region Component
/**
 * @name Checkbox
 * @param {CheckboxProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <label className={CheckboxStyles(props.className)}>
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          disabled={props.disabled}
          checked={props.checked}
          onChange={props.onClick}
          className="size-4 cursor-pointer appearance-none rounded-1 border border-black transition-all duration-150 ease-in-out checked:bg-black hover:bg-gray-300 checked:hover:bg-gray-800 disabled:pointer-events-none disabled:border-gray-500 disabled:bg-gray-300 checked:disabled:bg-gray-500 dark:border-gray-100 dark:checked:bg-gray-100 dark:hover:bg-gray-800 dark:checked:hover:bg-gray-200 dark:disabled:border-gray-600 dark:disabled:bg-gray-900 dark:checked:disabled:bg-gray-600"
        />
        <AnimatePresence>
          {props.checked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.08, ease: "easeInOut" }}
              className="pointer-events-none absolute"
            >
              <Icon
                name="check"
                className={IconStyles({
                  disabled: !!props.disabled,
                  checked: props.checked,
                })}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {props.children && (
        <p className={LabelStyles({ disabled: !!props.disabled })}>
          {props.children}
        </p>
      )}
    </label>
  );
};
// endregion

export default Checkbox;
