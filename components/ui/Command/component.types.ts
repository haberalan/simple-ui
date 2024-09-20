import { ICONS } from "@/assets/assets";

type ItemProp = {
  /**
   * Item label
   */
  label: string;
  /**
   * Item href
   */
  href: string;
  /**
   * Item icon
   */
  icon: keyof typeof ICONS;
};

type ItemsProps = {
  /**
   * Label of the group
   */
  label: string;
  /**
   * Items of the group
   */
  items: ItemProp[];
};

type CommandProps = {
  /**
   * Command open state
   */
  open: boolean;
  /**
   * Command close handler
   */
  handleClose: () => void;
  /**
   * Command items
   */
  labels: ItemsProps[];
  /**
   * Additional classNames
   */
  className?: string;
};

export { type CommandProps };
