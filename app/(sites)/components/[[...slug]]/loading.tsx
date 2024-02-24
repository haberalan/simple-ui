import React from "react";

import { Loader } from "@/components/ui";

export default function Loading() {
  return (
    <div className="flex items-center gap-2">
      <Loader size="sm" />
      <p>Loading...</p>
    </div>
  );
}
