"use client";

import { COMPONENTS } from "@/constants";
import { ICONS } from "@/assets/assets";
import { useState } from "react";
import { Button, Command } from "../ui";

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

const CommandPreview = () => {
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
      <Button variant="secondary" size="md" onClick={handleOpen}>
        Open Command
      </Button>
    </>
  );
};

export default CommandPreview;
