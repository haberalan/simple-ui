import { AlertProps } from "./Alert/component.types";
import React from "react";

type AlertContextProps = {
  /**
   * Array of alerts
   */
  alerts: Omit<AlertProps, "onClose">[];
  /**
   * Function that adds an alert to the array
   */
  push: (alert: Omit<AlertProps, "id" | "onClose">) => void;
};

type AlertProviderProps = {
  /**
   * Content of the provider
   */
  children: React.ReactNode;
};

export { type AlertContextProps, type AlertProviderProps };
