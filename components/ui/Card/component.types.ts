type CardProps = {
  /**
   * Card contents
   */
  children: React.ReactElement | React.ReactNode;
  /**
   * Adds link to the card
   */
  href?: string;
  /**
   * Card onClick event
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Card onContextMenu event
   */
  onContextMenu?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Card additional class Names
   */
  className?: string;
};

export { type CardProps };
