// region Imports
import React from "react";
import { IconProps } from "./component.types";
import { ICONS } from "@/assets/assets";
import { ICON_FILES } from "./component.constants";
// endregion

// region Component
/**
 * @name Icon
 * @param {IconProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Icon: React.FC<IconProps> = (props) => {
  const iconName = ICONS[props.name ?? "ArrowRight"];

  const SVGIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined =
    ICON_FILES[iconName as keyof typeof ICONS];

  return (
    SVGIcon && (
      <SVGIcon onClick={props.onClick} className={props.className ?? ""} />
    )
  );
};
// endregion

export default Icon;
