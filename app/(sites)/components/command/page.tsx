"use client";

import { Button, Command } from "@/components/ui";
import { COMPONENTS } from "@/constants";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useState } from "react";
import { ICONS } from "@/assets/assets";

const LABELS = [
  {
    label: "Components",
    items: [
      ...COMPONENTS.map((link) => ({
        label: link.name,
        href: link.path,
        icon: "Layout" as keyof typeof ICONS,
      })),
    ],
  },
];

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
      <Command open={open} handleClose={handleClose} labels={LABELS} />
      <ComponentHeader
        name="Command"
        description="Commands are used to display a list of links in a dropdown menu. They can be used to navigate to different pages, to open different modals, or to perform different actions."
      />
      <ComponentPreview
        preview={
          <Button variant="secondary" size="md" onClick={handleOpen}>
            Open Command
          </Button>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Command",
            props: [
              {
                name: "open",
                default: "false",
                type: "boolean",
                description: "Command open state.",
              },
              {
                name: "handleClose",
                default: "undefined",
                type: "() => void",
                description: "Command close handler.",
              },
              {
                name: "labels",
                default: "undefined",
                type: "ItemsProps[]",
                description: "Command items.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
