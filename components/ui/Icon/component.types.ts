import { IconName } from "@/assets/icons";

type IconProps = {
  /**
   * Name of the icon to render
   */
  name: IconName;
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
