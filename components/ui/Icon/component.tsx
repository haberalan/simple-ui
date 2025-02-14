// region Imports
import React from "react";
import { IconProps } from "./component.types";
import { IconName, ICONS } from "@/assets/icons";
// endregion

// region Component
/**
 * @name Icon
 * @param {IconProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Icon: React.FC<IconProps> = (props) => {
  const iconName = props.name ?? "ArrowRight";

  const SVGIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined =
    ICONS[iconName as IconName];

  return (
    SVGIcon && (
      <SVGIcon onClick={props.onClick} className={props.className ?? ""} />
    )
  );
};
// endregion

export default Icon;
