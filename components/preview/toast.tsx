"use client";

import { useContext } from "react";
import { ToastContext, Button } from "../ui";

const ToastPreview = () => {
  const ctxToast = useContext(ToastContext);

  const handleClick = () => {
    ctxToast.push({
      children: "This is a toast message",
    });
  };

  return (
    <Button variant="secondary" size="md" onClick={handleClick}>
      Push Toast
    </Button>
  );
};

export default ToastPreview;
