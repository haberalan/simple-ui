"use client";

// region Imports
import Image from "next/image";
import React, { useState } from "react";
import { AvatarProps } from "./component.types";
import { AvatarImageStyles, AvatarWrapperStyles } from "./component.styles";
// endregion

// region Component
/**
 * @name Avatar
 * @param {AvatarProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Avatar: React.FC<AvatarProps> = (props) => {
  const [show, setShow] = useState(true);

  return (
    <div className={AvatarWrapperStyles(props.className)}>
      {!show && (
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-xs font-700">
          {props.alt}
        </p>
      )}
      <Image
        src={props.src}
        alt={props.alt}
        height={props.size}
        width={props.size}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        onContextMenu={props.onContextMenu}
        onError={() => setShow(false)}
        className={AvatarImageStyles({ show })}
      />
    </div>
  );
};
// endregion

export default Avatar;
