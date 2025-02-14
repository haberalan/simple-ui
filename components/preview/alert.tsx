"use client";

import { Button, useAlertContext } from "../ui";

const AlertPreview = () => {
  const ctxAlert = useAlertContext();

  const handleClick = () => {
    ctxAlert.push({
      label: "Alert",
      children: "This is an alert",
      icon: "sun",
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
