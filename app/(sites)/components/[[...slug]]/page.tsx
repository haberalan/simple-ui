import React from "react";
import { PREVIEWS } from "@/components/preview";
import { redirect } from "next/navigation";

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
