import { IconName } from "@/assets/icons";

type BadgeProps = {
  /**
   * Badge contents
   */
  children: string;
  /**
   * Badge variant
   */
  variant: "primary" | "secondary" | "tertiary";
  /**
   * Badge size
   */
  size: "xs" | "sm" | "md" | "lg";
  /**
   * Badge shape
   */
  shape: "rounded" | "pill";
  /**
   * Is badge disabled
   */
  disabled?: boolean;
  /**
   * Sets badge with icon
   */
  icon?: IconName;
  /**
   * Sets icon position
   */
  iconPosition?: "left" | "right";
  /**
   * Adds link to the badge
   */
  href?: string;
  /**
   * Ads onClick event to the badge
   */
  onClick?: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type BadgeProps };
