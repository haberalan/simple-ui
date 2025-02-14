import React from "react";
import { Card, Icon } from "@/components/ui";
import { IconName, ICONS } from "@/assets/icons";
import { PageHeader } from "../../_components";

export default function Page() {
  return (
    <>
      <PageHeader
        name="Icons"
        description="You can set your own icons in the project by using the generateIcons script, that goes through the svg files in the icons folder and generates the necessary files for the icons to be used in the project. By default the icons used in the project are from Pixelarticons."
      />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(ICONS).map((icon) => (
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
