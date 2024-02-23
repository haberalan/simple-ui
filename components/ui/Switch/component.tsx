"use client";

// region Imports
import React from "react";
import { SwitchProps } from "./component.types";
import { AnimatePresence, motion } from "framer-motion";
import { LabelStyles, SwitchStyles } from "./component.styles";
// endregion

// region Component
/**
 * @name Switch
 * @param {SwitchProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Switch: React.FC<SwitchProps> = (props) => {
  return (
    <label className="flex items-center gap-2">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          disabled={props.disabled}
          checked={props.checked}
          onChange={props.onClick}
          className="box-content h-4 w-8 cursor-pointer appearance-none rounded-full border-2 border-gray-300 bg-gray-300 transition-all duration-200 ease-in-out checked:border-black checked:bg-black disabled:cursor-default disabled:border-gray-500 disabled:bg-gray-500 dark:border-gray-900 dark:bg-gray-900 checked:dark:border-gray-100 checked:dark:bg-gray-100 disabled:dark:border-gray-700 disabled:dark:bg-gray-700"
        />
        <AnimatePresence initial={false}>
          <motion.div
            animate={{
              left: props.checked ? "auto" : 0,
              right: props.checked ? "0" : "auto",
            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className={SwitchStyles({
              disabled: !!props.disabled,
              checked: !!props.checked,
            })}
          ></motion.div>
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

export default Switch;
