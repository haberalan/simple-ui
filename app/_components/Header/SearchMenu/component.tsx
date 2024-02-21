"use client";

import { Command, Icon } from "@/components/ui";
import React, { useState } from "react";
// import { LINKS } from "@/constants";
import { ICONS } from "@/assets/assets";

const LINKS = [
  {
    children: "Button",
    href: "/docs/button",
  },
];

const labels = [
  {
    label: "Documentation",
    items: [
      {
        label: "Getting Started",
        href: "/docs/getting-started",
        icon: "Layout" as keyof typeof ICONS,
      },
    ],
  },
  {
    label: "Components",
    items: [
      ...LINKS.map((link) => ({
        label: link.children,
        href: link.href,
        icon: "Layout" as keyof typeof ICONS,
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
        className="flex w-[240px] items-center justify-between gap-2 rounded-1 border border-gray-300 px-2 py-[7px] text-left text-sm text-gray-600 transition-all hover:bg-gray-200 hover:text-black dark:border-gray-900 hover:dark:bg-gray-900 hover:dark:text-gray-100"
        onClick={handleClick}
      >
        <span>Search...</span>
        <Icon name="Search" className="size-4" />
      </button>
      <Command open={open} handleClose={handleClick} labels={labels} />
    </>
  );
};

export default SearchMenu;
