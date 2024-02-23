import { StaticImageData } from "next/image";

type AvatarProps = {
  /**
   * Avatar image
   */
  src: string | StaticImageData;
  /**
   * Avatar alt text
   */
  alt: string;
  /**
   * Avatar size in px
   */
  size: number;
  /**
   * Avatar onClick event
   */
  onClick?: () => void;
  /**
   * Avatar onContextMenu event
   */
  onContextMenu?: () => void;
  /**
   * Avatar onMouseEnter event
   */
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  /**
   * Avatar additional classNames
   */
  className?: string;
};

export { type AvatarProps };
