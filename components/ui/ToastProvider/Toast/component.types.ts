import React from "react";

type ToastProps = {
  /**
   * Unique key for the Toast
   */
  id: string;
  /**
   * Toast description
   */
  children: React.ReactNode;
};

export { type ToastProps };
