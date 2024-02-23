"use client";

// region Imports
import React from "react";
import { TableOfContentsProps } from "./component.types";
import { useHeadingsData, useIntersectionObserver } from "./hooks";
import { ItemStyles } from "./component.styles";
// endregion

// region Component
/**
 * @name TableOfContents
 * @param {TableOfContentsProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const TableOfContents: React.FC<TableOfContentsProps> = (props) => {
  const { headings, handleClick } = useHeadingsData("[data-content]");
  const { index: indexHeading } = useIntersectionObserver(headings);

  const node = (heading: HTMLElement) => {
    return heading.nodeName as "H2" | "H3" | "H4" | "H5" | "H6";
  };
  const active = (index: number) => {
    return indexHeading === index;
  };

  return (
    <nav className="flex w-full max-w-[200px] flex-col gap-8">
      <p className="text-md font-500">{props.heading ?? "On This Page"}</p>
      <ul className="flex list-none flex-col gap-2">
        {headings.map((heading, index) => (
          <li
            key={heading.innerText}
            onClick={handleClick.bind(this, heading)}
            className={ItemStyles({
              node: node(heading),
              active: active(index),
            })}
          >
            {heading.innerText}
          </li>
        ))}
      </ul>
    </nav>
  );
};
// endregion

export default TableOfContents;
