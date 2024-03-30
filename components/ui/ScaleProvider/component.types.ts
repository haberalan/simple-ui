import React from "react";

type ScaleContextProps = {
  /**
   * Function that sets the scale of the component
   */
  setScale: (scale: number) => void;
  /**
   * Function that sets the transition duration of the component
   */
  setDuration: (duration: number) => void;
};

type ScaleProviderProps = {
  /**
   * Content of the provider
   */
  children: React.ReactNode;
};

export { type ScaleContextProps, type ScaleProviderProps };
