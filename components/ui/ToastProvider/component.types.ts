import { ToastProps } from "./Toast/component.types";
import React from "react";

type ToastContextProps = {
  /**
   * Array of Toasts
   */
  Toasts: Omit<ToastProps, "onClose">[];
  /**
   * Function that adds an Toast to the array
   */
  push: (Toast: Omit<ToastProps, "id" | "onClose">) => void;
};

type ToastProviderProps = {
  /**
   * Content of the provider
   */
  children: React.ReactNode;
};

export { type ToastContextProps, type ToastProviderProps };
