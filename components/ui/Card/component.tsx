// region Imports
import React from 'react';
import { CardProps } from './component.types';
import { CardStyles } from './component.styles';
import { Link } from '..';
// endregion

// region Component
/**
 * @name Card
 * @param {CardProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Card: React.FC<CardProps> = (props) => {
  const content = (
    <div onClick={props.onClick} onContextMenu={props.onContextMenu} className={CardStyles(props.className)}>
      {props.children}
    </div>
  );

  if (props.href) {
    return <Link href={props.href}>{content}</Link>;
  }

  return content;
};
// endregion

export default Card;
