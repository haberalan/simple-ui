"use client";

// region Imports
import React, { createContext, useContext, useRef, useState } from "react";
import { ToastContextProps, ToastProviderProps } from "./component.types";
import { ToastProps } from "./Toast/component.types";
import { AnimatePresence, motion } from "framer-motion";
import Toast from "./Toast";
import { v4 as uuidv4 } from "uuid";
// endregion

// region Context
/**
 * @name ToastContext
 * @description The context of the Toast
 * @type {React.Context<ToastContextProps>}
 */
const ToastContext = createContext<ToastContextProps>({
  Toasts: [],
  push: () => {},
});

/**
 * @name useToastContext
 * @description A hook to use the Toast context
 * @returns {React.Context<ToastContextProps>} The context of the Toast
 */
const useToastContext = () => {
  const context = useContext(ToastContext);

  if (context === undefined) {
    throw new Error("useToastContext must be used within a ToastProvider");
  }

  return context;
};
// endregion

// region Component
/**
 * @name ToastProvider
 * @param {ToastProviderProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const ToastProvider: React.FC<ToastProviderProps> = (props) => {
  const [Toasts, setToasts] = useState<Omit<ToastProps, "onClose">[]>([]);
  const timeouts = useRef<
    { id: string; timeout: ReturnType<typeof setTimeout> }[]
  >([]);

  const push = (Toast: Omit<ToastProps, "id" | "onClose">) => {
    const id = uuidv4();

    setToasts([
      ...Toasts,
      {
        ...Toast,
        id,
      },
    ]);

    timeouts.current.push({
      id,
      timeout: setTimeout(() => {
        setToasts((prev) => prev.filter((a) => a.id !== id));
      }, 8000),
    });
  };

  return (
    <ToastContext.Provider
      value={{
        Toasts,
        push,
      }}
    >
      <div className="pointer-events-none fixed bottom-0 right-0 z-50 flex w-full items-center justify-center md:bottom-2">
        <ul
          className="flex flex-col items-center justify-center gap-2 px-2 py-4 md:p-0"
          aria-live="polite"
        >
          <AnimatePresence initial={false} mode="popLayout">
            {Toasts.map((toast) => (
              <motion.li
                className="pointer-events-auto w-max text-nowrap"
                key={toast.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                role="Toast"
              >
                <Toast {...toast} key={toast.id} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
      {props.children}
    </ToastContext.Provider>
  );
};
// endregion

export { useToastContext };
export default ToastProvider;
