import React from "react";
import { IconName } from "@/assets/icons";
import { ButtonProps } from "../../Button/component.types";

type AlertProps = {
  /**
   * Unique key for the alert
   */
  id: string;
  /**
   * Alert label
   */
  label: string;
  /**
   * Alert description
   */
  children: React.ReactNode;
  /**
   * Icon of the alert
   */
  icon?: IconName;
  /**
   * Action button
   */
  action?: ButtonProps;
  /**
   * Shows timer of the alert
   */
  timer?: boolean;
  /**
   * Shows close button
   */
  showClose?: boolean;
  /**
   * Function to close the alert
   */
  onClose: (key: string) => void;
};

export { type AlertProps };
