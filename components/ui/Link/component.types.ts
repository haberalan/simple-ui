type LinkProps = {
  /**
   * Link href
   */
  href: string;
  /**
   * Link contents
   */
  children: React.ReactNode;
  /**
   * Sets link as focusable
   */
  tabIndex?: number;
  /**
   * Link additional classes
   */
  className?: string;
  /**
   * Specifies where to open the linked document
   */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /**
   * Specifies the relationship between the current document and the linked document
   */
  rel?: string;
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

export { type LinkProps };
