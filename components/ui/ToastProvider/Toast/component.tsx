"use client";

// region Imports
import React from "react";
import { ToastProps } from "./component.types";
import { Card } from "../..";
// endregion

// region Component
/**
 * @name Toast
 * @param {ToastProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Toast: React.FC<ToastProps> = (props) => {
  return (
    <Card className="relative flex w-full items-center justify-between gap-4 overflow-hidden rounded-6 bg-gray-200 py-[6px] shadow-md dark:bg-black">
      <div className="flex gap-4">
        <div className="flex flex-col gap-1">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {props.children}
          </div>
        </div>
      </div>
    </Card>
  );
};
// endregion

export default Toast;
