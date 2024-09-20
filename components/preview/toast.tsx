"use client";

import { useToastContext, Button } from "../ui";

const ToastPreview = () => {
  const ctxToast = useToastContext();

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
