import { IconName } from "@/assets/icons";

type ToggleProps = {
  /**
   * The variant of the toggle.
   */
  variant: "primary" | "secondary";
  /**
   * Icon of the toggle.
   */
  icon: IconName;
  /**
   * Toggled state.
   */
  toggled: boolean;
  /**
   * Toggle onClick handler.
   */
  onClick: () => void;
  /**
   * Label of the toggle.
   */
  label?: string;
  /**
   * Disabled state.
   */
  disabled?: boolean;
  /**
   * Additional classNames
   */
  className?: string;
};

export { type ToggleProps };
