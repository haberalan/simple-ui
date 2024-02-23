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
};

export { type LinkProps };
