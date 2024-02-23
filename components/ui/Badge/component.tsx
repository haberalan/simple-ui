"use client";

// region Imports
import React from "react";
import { BadgeProps } from "./component.types";
import { BadgeStyles, IconStyles, LinkStyles } from "./component.styles";
import { Icon, Link } from "..";
// endregion

// region Component
/**
 * @name Badge
 * @param {BadgeProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Badge: React.FC<BadgeProps> = (props) => {
  const handleKeyDOwn = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      props.onClick?.();
    }
  };

  const content = (
    <div
      data-badge
      onClick={props.onClick}
      tabIndex={props.onClick ? 0 : -1}
      onKeyDown={handleKeyDOwn}
      className={BadgeStyles({
        variant: props.variant,
        size: props.size,
        shape: props.shape,
        clickable: !!(props.onClick || props.href),
      })}
    >
      {props.icon && (
        <Icon
          name={props.icon}
          className={IconStyles({
            size: props.size,
            position: props.iconPosition ?? "left",
          })}
        />
      )}
      {props.children}
    </div>
  );

  if (props.href)
    return (
      <Link
        data-badge
        className={LinkStyles({
          shape: props.shape,
          disabled: !!props.disabled,
        })}
        href={props.href}
        tabIndex={props.disabled ? -1 : 0}
      >
        {content}
      </Link>
    );

  return content;
};
// endregion

export default Badge;
