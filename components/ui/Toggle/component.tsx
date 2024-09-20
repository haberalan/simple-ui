// region Imports
import React from "react";
import { ToggleProps } from "./component.types";
import { Icon } from "..";
import ToggleStyles from "./component.styles";
// endregion

// region Component
/**
 * @name Toggle
 * @param {ToggleProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Toggle: React.FC<ToggleProps> = (props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      props.onClick();
    }
  };

  return (
    <div
      tabIndex={props.disabled ? -1 : 0}
      onClick={props.onClick}
      onKeyDown={handleKeyDown}
      className={ToggleStyles(
        {
          variant: props.variant,
          toggled: !!props.toggled,
          disabled: !!props.disabled,
        },
        props.className,
      )}
    >
      <Icon name={props.icon} className="size-6" />
      {props.label && <p className="text-sm">{props.label}</p>}
    </div>
  );
};
// endregion

export default Toggle;
