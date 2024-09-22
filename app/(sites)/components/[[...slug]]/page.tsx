import React from "react";
import { PREVIEWS } from "@/components/preview";
import { redirect } from "next/navigation";
import { COMPONENTS } from "@/constants";
import { Card } from "@/components/ui";

export async function generateMetadata({
  params,
}: {
  params: { slug?: string[] };
}) {
  if (params.slug) {
    const component = COMPONENTS.find(
      (component) =>
        component.name
          .replace(/([a-z])([A-Z])/g, "$1-$2")
          .replace(/^-/, "")
          .toLocaleLowerCase() === params.slug?.[0].toLocaleLowerCase(),
    );

    if (component) {
      return {
        title: `${component.name} | simple-ui`,
        description: component.description,
      };
    }
  }

  return {
    title: "Components | simple-ui",
    description: "It is a main components page.",
  };
}

export default function Page({ params }: { params: { slug?: string[] } }) {
  if (params.slug) {
    return (
      PREVIEWS[params.slug[0] as keyof typeof PREVIEWS] ??
      redirect("/components")
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {COMPONENTS.map((component) => (
        <Card
          key={component.name}
          href={component.path}
          className="flex min-h-[120px] items-center justify-center text-sm text-gray-600 shadow-sm transition hover:text-black hover:shadow-lg dark:hover:text-white"
        >
          {component.formattedName || component.name}
        </Card>
      ))}
    </div>
  );
}
