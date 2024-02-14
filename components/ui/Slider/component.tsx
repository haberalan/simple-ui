// region Imports
import React from 'react';
import { SliderProps } from './component.types';
import { SliderStyles } from './component.styles';
// endregion

// region Component
/**
 * @name Slider
 * @param {SliderProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Slider: React.FC<SliderProps> = (props) => {
  const calcWidth = () => {
    if (props.value > (props.max ?? 100) / 2) {
      return `calc(${((props.value - (props.min ?? 0)) / ((props.max ?? 100) - (props.min ?? 0))) * 100}%)`;
    } else {
      if (props.value === 0) return '0%';
      return `calc(${((props.value - (props.min ?? 0)) / ((props.max ?? 100) - (props.min ?? 0))) * 100}% + 3px)`;
    }
  };

  const calcRounded = () => {
    if (props.value > (props.max ?? 100) / 1.4) {
      return 'rounded-full';
    } else {
      return 'rounded-l-full';
    }
  };

  return (
    <div className="relative flex w-full">
      <input
        type="range"
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        min={props.min}
        max={props.max}
        step={props.step}
        className="slider group h-2 w-full appearance-none rounded-full bg-gray-300 dark:bg-gray-800"
      />
      <div className={SliderStyles({ disabled: !!props.disabled }, calcRounded())} style={{ width: calcWidth() }}></div>
    </div>
  );
};
// endregion

export default Slider;
