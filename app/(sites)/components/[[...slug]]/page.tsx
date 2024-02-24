import React from "react";
import { PREVIEWS } from "@/components/preview";

export default function Page({ params }: { params: { slug?: string[] } }) {
  if (params.slug) {
    return PREVIEWS[params.slug[0] as keyof typeof PREVIEWS];
  }

  return (
    <div>
      <h2>Components</h2>
      <p>It is a main components page.</p>
    </div>
  );
}
