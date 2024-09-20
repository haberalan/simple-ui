"use client";

// region Imports
import React, { createContext, useCallback, useContext, useState } from "react";
import { motion } from "framer-motion";
import { ScaleContextProps, ScaleProviderProps } from "./component.types";
// endregion

// region Context
/**
 * @name ScaleContext
 * @description The context of the scale
 * @type {React.Context<ScaleContextProps>}
 */
const ScaleContext = createContext<ScaleContextProps>({
  setScale: () => {},
  setDuration: () => {},
});

/**
 * @name useScaleContext
 * @description A hook to use the Scale context
 * @returns {React.Context<ScaleContextProps>} The context of the Scale
 */
const useScaleContext = () => {
  const context = useContext(ScaleContext);

  if (context === undefined) {
    throw new Error("useScaleContext must be used within a ScaleProvider");
  }

  return context;
};
// endregion

// region Component
/**
 * @name ScaleProvider
 * @param {ScaleProviderProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const ScaleProvider: React.FC<ScaleProviderProps> = (props) => {
  const [scale, setScale] = useState(1);
  const [duration, setDuration] = useState(0.3);

  const handleSetScale = useCallback((scale: number) => {
    setScale(scale);
  }, []);

  const handleSetDuration = useCallback((duration: number) => {
    setDuration(duration);
  }, []);

  return (
    <ScaleContext.Provider
      value={{ setScale: handleSetScale, setDuration: handleSetDuration }}
    >
      <motion.div
        animate={{ scale }}
        transition={{ duration }}
        className="flex min-h-screen flex-col"
      >
        {props.children}
      </motion.div>
    </ScaleContext.Provider>
  );
};
// endregion

export { useScaleContext };
export default ScaleProvider;
