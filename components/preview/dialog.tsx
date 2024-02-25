"use client";

import { useState } from "react";
import { Button, Card, Dialog } from "../ui";

const DialogPreview = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} handleClose={handleClose}>
        <Card className="flex w-[360px] max-w-[90vw] flex-col gap-6 pt-4">
          <div>
            <p className="mb-2 text-2xl font-500">This is a dialog</p>
            <p className="text-sm text-gray-500">
              Dialog is a modal component that can be used to display a message
              or to get input from the user.
            </p>
          </div>
          <Button variant="secondary" size="md" onClick={handleClose}>
            Close dialog
          </Button>
        </Card>
      </Dialog>
      <Button variant="secondary" size="md" onClick={handleOpen}>
        Open Dialog
      </Button>
    </>
  );
};

export default DialogPreview;
