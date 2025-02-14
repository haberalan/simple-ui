import { IconName } from "@/assets/icons";

type IconButtonProps = {
  /**
   * Icon to be displayed
   */
  icon: IconName;
  /**
   * IconButton variant
   */
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
  /**
   * IconButton size
   */
  size?: "sm" | "md" | "lg";
  /**
   * IconButton onClick event
   */
  onClick?: () => void;
  /**
   * IconButton type
   */
  type?: "button" | "submit" | "reset";
  /**
   * IconButton disabled
   */
  disabled?: boolean;
  /**
   * IconButton loading
   */
  loading?: boolean;
  /**
   * IconButton href
   */
  href?: string;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type IconButtonProps };
