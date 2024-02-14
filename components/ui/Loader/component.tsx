// region Imports
import React from 'react';
import { LoaderProps } from './component.types';
import { LoaderStyles } from './component.styles';
// endregion

// region Component
/**
 * @name Loader
 * @param {LoaderProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Loader: React.FC<LoaderProps> = (props) => {
  return <div className={LoaderStyles({ size: props.size })}></div>;
};
// endregion

export default Loader;
