type SliderProps = {
  /**
   * The value of the slider.
   */
  value: number;
  /**
   * The function to be called when the value of the slider changes.
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The minimum value of the slider.
   */
  min?: number;
  /**
   * The maximum value of the slider.
   */
  max?: number;
  /**
   * The step value of the slider.
   */
  step?: number;
  /**
   * Sets slider as disabled.
   */
  disabled?: boolean;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type SliderProps };
