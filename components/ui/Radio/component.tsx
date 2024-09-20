// region Imports
import React from "react";
import { RadioProps } from "./component.types";
// endregion

// region Component
/**
 * @name Radio
 * @param {RadioProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Radio: React.FC<RadioProps> = (props) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={props.id}
        name={props.name}
        disabled={props.disabled}
        checked={props.checked === props.id}
        onChange={props.onChange}
        value={props.id}
        className="peer relative size-4 cursor-pointer appearance-none rounded-full border-2 border-gray-300 after:absolute after:left-[2px] after:top-[2px] after:size-2 after:rounded-full after:bg-black after:content-none checked:border-gray-500 checked:after:content-[''] disabled:cursor-default disabled:border-gray-300 disabled:after:bg-gray-400 dark:border-gray-100 after:dark:bg-gray-100 disabled:dark:border-gray-600 disabled:dark:after:bg-gray-600"
      />
      <label
        htmlFor={props.id}
        className={`text-sm font-500 peer-disabled:text-gray-500 peer-disabled:dark:text-gray-600`}
      >
        {props.label}
      </label>
    </div>
  );
};
// endregion

export default Radio;
