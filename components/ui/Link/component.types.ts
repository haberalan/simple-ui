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
};

export { type LinkProps };
