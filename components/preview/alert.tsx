"use client";

import { useContext } from "react";
import { AlertContext, Button } from "../ui";

const AlertPreview = () => {
  const ctxAlert = useContext(AlertContext);

  const handleClick = () => {
    ctxAlert.push({
      label: "Alert",
      children: "This is an alert",
      icon: "Sunset",
      timer: true,
      showClose: true,
    });
  };

  return (
    <Button variant="secondary" size="md" onClick={handleClick}>
      Push Alert
    </Button>
  );
};

export default AlertPreview;
