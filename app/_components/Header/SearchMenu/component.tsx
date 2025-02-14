"use client";

import { Command, Icon } from "@/components/ui";
import React, { useState } from "react";
import { IconName } from "@/assets/icons";
import { COMPONENTS } from "@/constants";

const labels = [
  {
    label: "Getting started",
    items: [
      {
        label: "Installation",
        href: "/general/installation",
        icon: "download" as IconName,
      },
      {
        label: "Documentation",
        href: "/general/documentation",
        icon: "file-alt" as IconName,
      },
      {
        label: "Icons",
        href: "/general/icons",
        icon: "image" as IconName,
      },
    ],
  },
  {
    label: "Components",
    items: [
      ...COMPONENTS.map((component) => ({
        label: component.formattedName || component.name,
        href: component.path,
        icon: "layout" as IconName,
      })),
    ],
  },
  {
    label: "Examples",
    items: [],
  },
];

const SearchMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className="rounded-1 flex w-[240px] items-center justify-between gap-2 border border-gray-300 px-2 py-[7px] text-left text-sm text-gray-600 transition-all hover:bg-gray-200 hover:text-black dark:border-gray-900 dark:hover:bg-gray-900 dark:hover:text-gray-100"
        onClick={handleClick}
      >
        <span>Search...</span>
        <Icon name="search" className="size-4" />
      </button>
      <Command open={open} handleClose={handleClick} labels={labels} />
    </>
  );
};

export default SearchMenu;
