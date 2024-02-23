import { ICONS } from "@/assets/assets";

type ToggleProps = {
  /**
   * The variant of the toggle.
   */
  variant: "primary" | "secondary";
  /**
   * Icon of the toggle.
   */
  icon: keyof typeof ICONS;
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
};

export { type ToggleProps };
