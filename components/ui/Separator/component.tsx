// region Imports
import React from 'react';
import { SeparatorProps } from './component.types';
import { SeparatorStyles } from './component.styles';
// endregion

// region Component
/**
 * @name Separator
 * @param {SeparatorProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Separator: React.FC<SeparatorProps> = (props) => {
  return <div role="none" className={SeparatorStyles({ variant: props.variant }, props.className)}></div>;
};
// endregion

export default Separator;
