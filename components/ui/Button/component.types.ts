import { ICONS } from "@/assets/assets";

type ButtonProps = {
  /**
   * Button variants
   */
  variant: "primary" | "secondary" | "tertiary" | "quaternary";
  /**
   * Button sizes
   */
  size: "sm" | "md" | "lg";
  /**
   * Button contents
   */
  children?: string;
  /**
   * Button onClick event
   */
  onClick?: () => void;
  /**
   * Adds icon to the button
   */
  icon?: keyof typeof ICONS;
  /**
   * Sets icon position
   */
  iconPosition?: "left" | "right";
  /**
   * Sets button type
   */
  type?: "button" | "submit" | "reset";
  /**
   * Is button disabled
   */
  disabled?: boolean;
  /**
   * Is button loading
   */
  loading?: boolean;
  /**
   * Adds link to the button
   */
  href?: string;
  /**
   * Sets button as rounded
   */
  rounded?: boolean;
};

export { type ButtonProps };
