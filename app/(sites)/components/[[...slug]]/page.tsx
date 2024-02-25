import React from "react";
import { PREVIEWS } from "@/components/preview";
import { redirect } from "next/navigation";
import { COMPONENTS } from "@/constants";

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
    <div>
      <h2>Components</h2>
      <p>It is a main components page.</p>
    </div>
  );
}
