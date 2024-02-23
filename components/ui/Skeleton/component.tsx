// region Imports
import React from "react";
import { SkeletonProps } from "./component.types";
import { SkeletonStyles } from "./component.styles";
// endregion

// region Component
/**
 * @name Skeleton
 * @param {SkeletonProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Skeleton: React.FC<SkeletonProps> = (props) => {
  return <div className={SkeletonStyles(props.className)}></div>;
};
// endregion

export default Skeleton;
