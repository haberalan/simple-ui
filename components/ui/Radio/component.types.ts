type RadioProps = {
  /**
   * Radio value
   */
  checked: string;
  /**
   * Radio onChange event
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Radio id
   */
  id: string;
  /**
   * Radio name
   */
  name: string;
  /**
   * Radio label
   */
  label: string;
  /**
   * Radio disabled
   */
  disabled?: boolean;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type RadioProps };
