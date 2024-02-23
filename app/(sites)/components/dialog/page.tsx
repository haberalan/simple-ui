"use client";

import { Button, Card, Dialog } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useState } from "react";

export default function Page() {
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
        <Card className="flex max-w-[360px] flex-col gap-6 pt-4">
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
      <ComponentHeader
        name="Dialog"
        description="Dialogs are used to display a message or to get input from the user. They can be used to display a variety of content types, such as text, images, links, and buttons."
      />
      <ComponentPreview
        preview={
          <Button variant="secondary" size="md" onClick={handleOpen}>
            Open Dialog
          </Button>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Dialog",
            props: [
              {
                name: "open",
                default: "false",
                type: "boolean",
                description: "Dialog open state.",
              },
              {
                name: "handleClose",
                default: "undefined",
                type: "() => void",
                description: "Dialog close handler.",
              },
              {
                name: "children",
                default: "undefined",
                type: "React.ReactElement",
                description: "Dialog contents.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
