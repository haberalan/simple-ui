import { ICONS } from "@/assets/assets";

type IconProps = {
  /**
   * Name of the icon to render
   */
  name: keyof typeof ICONS;
  /**
   * Icon onClick event
   */
  onClick?: () => void;
  /**
   * Icon additional classes
   */
  className?: string;
};

export { type IconProps };
