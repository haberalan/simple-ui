import React from 'react';

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
};

export { type ActiveLinkProps };
