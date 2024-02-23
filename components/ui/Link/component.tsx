// region Imports
import React, { createElement } from "react";
import { LinkProps } from "./component.types";
import NextLink from "next/link";
// endregion

// region Component
/**
 * @name Link
 * @param {LinkProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Link: React.FC<LinkProps> = (props) => {
  const isExternalLink = props.href.toLowerCase().startsWith("http");

  const Element = (() => {
    if (isExternalLink) {
      return createElement(
        "a",
        {
          target: props.target ?? "_blank",
          rel: props.rel ?? "noopener noreferrer",
          href: props.href,
          className: props.className,
        },
        props.children,
      );
    } else {
      return createElement(
        NextLink,
        {
          href: props.href,
          className: props.className,
        },
        props.children,
      );
    }
  })();

  return Element;
};
// endregion

export default Link;
