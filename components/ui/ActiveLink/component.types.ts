import React from "react";

type ActiveLinkProps = {
  /**
   * Content of the link
   */
  children: React.ReactElement | React.ReactNode;
  /**
   * Href of the link
   */
  href: string;
  /**
   * If true, the link will be relative to the current path
   */
  noAbsolute?: boolean;
  /**
   * Class name of the link
   */
  className?: string;
  /**
   * Class name of the link when active
   */
  activeClassName?: string;
  /**
   * Replace the current entry in the history stack
   */
  replace?: boolean;
  /**
   * Scroll to the top of the page after a navigation
   */
  scroll?: boolean;
  /**
   * Prefetch the linked page in the background
   */
  prefetch?: boolean;
};

export { type ActiveLinkProps };
