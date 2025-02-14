"use client";

import React, { useState } from "react";
import { Card, Icon, Input, Separator } from "@/components/ui";
import { IconName, ICONS } from "@/assets/icons";
import { PageHeader } from "../../_components";

export default function Page() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  const filteredIcons = Object.keys(ICONS).filter((icon) =>
    icon.toLowerCase().includes(value.toLowerCase()),
  );

  return (
    <>
      <PageHeader
        name="Icons"
        description="You can set your own icons in the project by using the generateIcons script, that goes through the svg files in the icons folder and generates the necessary files for the icons to be used in the project. By default the icons used in the project are from Pixelarticons."
      />
      <div className="flex flex-col">
        <div className="max-w-[280px]">
          <Input
            label="Icon name"
            icon="close"
            placeholder="Search for an icon"
            value={value}
            onChange={handleChange}
            onIconClick={handleReset}
          />
        </div>
        <Separator variant="horizontal" />
      </div>
      {filteredIcons.length === 0 && (
        <p className="text-md text-center text-gray-600">
          There are no icons that match your search.
        </p>
      )}
      <div className="grid grid-cols-3 gap-4">
        {filteredIcons.map((icon) => (
          <Card
            key={icon}
            className="flex min-h-[120px] flex-col items-center justify-center gap-2 text-sm text-gray-600 shadow-xs transition hover:text-black hover:shadow-lg dark:hover:text-white"
          >
            <Icon name={icon as IconName} className="size-12" />
            <p>{icon}</p>
          </Card>
        ))}
      </div>
    </>
  );
}
