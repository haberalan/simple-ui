"use client";

// region Imports
import React, { useCallback } from "react";
import { ActiveLinkProps } from "./component.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/lib/styles";
// endregion

// region Component
/**
 * @name ActiveLink
 * @param {ActiveLinkProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const ActiveLink: React.FC<ActiveLinkProps> = (props) => {
  const pathname = usePathname();

  const LinkStyles = styles("", {
    active: {
      true: `${props.activeClassName ?? ""} pointer-events-none`,
      false: "",
    },
  });

  const isActive = useCallback(() => {
    const path = pathname.split("/").filter((path) => path !== "");
    const href = props.href.split("/").filter((path) => path !== "");

    if (props.noAbsolute) {
      return path.every((pathPath) => href.includes(pathPath));
    }

    return href.every((hrefPath) => path.includes(hrefPath));
  }, [pathname, props.href, props.noAbsolute]);

  return (
    <Link
      href={props.href}
      className={LinkStyles({ active: isActive() }, props.className)}
      replace={props.replace}
      scroll={props.scroll}
      prefetch={props.prefetch}
    >
      {props.children}
    </Link>
  );
};
// endregion

export default ActiveLink;
