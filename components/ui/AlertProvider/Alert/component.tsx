"use client";

// region Imports
import React, { useEffect } from "react";
import { AlertProps } from "./component.types";
import { Button, Card, Icon, IconButton } from "../..";
import { animate, motion, useMotionValue } from "framer-motion";
// endregion

// region Component
/**
 * @name Alert
 * @param {AlertProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const Alert: React.FC<AlertProps> = (props) => {
  const width = useMotionValue("100%");

  useEffect(() => {
    animate(width, "0%", {
      duration: 8,
      ease: "linear",
    });
  }, [width]);

  return (
    <Card className="relative flex w-full items-center justify-between gap-8 overflow-hidden bg-gray-200 py-4 shadow-xs dark:bg-black">
      <div className="flex gap-4">
        {props.icon && <Icon name={props.icon} className="size-6 shrink-0" />}
        <div className="flex flex-col gap-1">
          <p className="text-lg font-500">{props.label}</p>
          <div className="text-sm text-gray-700 dark:text-gray-300">
            {props.children}
          </div>
        </div>
      </div>
      <div>{props.action && <Button {...props.action} />}</div>
      {props.showClose && (
        <div className="absolute right-3 top-2">
          <IconButton
            icon="close"
            variant="quaternary"
            size="sm"
            onClick={props.onClose.bind(this, props.id)}
          />
        </div>
      )}
      {props.timer && (
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-black dark:bg-gray-100"
          style={{ width }}
        />
      )}
    </Card>
  );
};
// endregion

export default Alert;
