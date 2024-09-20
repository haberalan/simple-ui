"use client";

// region Imports
import React, { createContext, useRef, useState } from "react";
import { AlertContextProps, AlertProviderProps } from "./component.types";
import { AlertProps } from "./Alert/component.types";
import { AnimatePresence, motion } from "framer-motion";
import Alert from "./Alert";
import { v4 as uuidv4 } from "uuid";
// endregion

// region Context
/**
 * @name AlertContext
 * @description The context of the alert
 * @type {React.Context<AlertContextProps>}
 */
const AlertContext = createContext<AlertContextProps>({
  alerts: [],
  push: () => {},
});
// endregion

// region Component
/**
 * @name AlertProvider
 * @param {AlertProviderProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const AlertProvider: React.FC<AlertProviderProps> = (props) => {
  const [alerts, setAlerts] = useState<Omit<AlertProps, "onClose">[]>([]);
  const timeouts = useRef<
    { id: string; timeout: ReturnType<typeof setTimeout> }[]
  >([]);

  const push = (alert: Omit<AlertProps, "id" | "onClose">) => {
    const id = uuidv4();

    setAlerts([
      ...alerts,
      {
        ...alert,
        id,
      },
    ]);

    timeouts.current.push({
      id,
      timeout: setTimeout(() => {
        setAlerts((prev) => prev.filter((a) => a.id !== id));
      }, 8000),
    });
  };

  const handleClose = (id: string) => {
    setAlerts((prev) =>
      prev.filter((alert) => {
        if (alert.id === id) {
          const timeout = timeouts.current.find((t) => t.id === id);
          if (timeout) {
            clearTimeout(timeout.timeout);
          }
          return false;
        }
        return true;
      }),
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alerts,
        push,
      }}
    >
      <div className="pointer-events-none fixed bottom-0 right-0 z-10 w-full max-w-[520px] md:bottom-8 md:right-8">
        <ul
          className="flex h-full max-w-[100vw] flex-col justify-end gap-4 px-2 py-4 md:p-0"
          aria-live="polite"
        >
          <AnimatePresence initial={false} mode="popLayout">
            {alerts.map((alert) => (
              <motion.li
                key={alert.id}
                layout
                className="pointer-events-auto"
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                role="alert"
              >
                <Alert {...alert} onClose={handleClose} key={alert.id} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
      {props.children}
    </AlertContext.Provider>
  );
};
// endregion

export { AlertContext };
export default AlertProvider;
