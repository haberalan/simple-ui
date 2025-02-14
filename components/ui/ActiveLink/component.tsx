"use client";

// region Imports
import React, { useCallback } from "react";
import { ActiveLinkProps } from "./component.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/lib/styles";
// endregion

// region Helper
function convertPathToRegex(path: string, exact: boolean): RegExp {
  if (!path.startsWith("/")) path = "/" + path;

  const regexStr = path.replace(/(:\w+|\[\w+\])/g, "[^/]+");
  return exact
    ? new RegExp(`^${regexStr}/?$`)
    : new RegExp(`^${regexStr}(/.*)?$`);
}
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
    if (props.href.includes(":") || props.href.includes("[")) {
      const regex = convertPathToRegex(props.href, props.exact ?? true);
      return regex.test(pathname);
    }

    if (props.exact) return pathname === props.href;

    return pathname.startsWith(props.href);
  }, [pathname, props.href, props.exact]);

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
