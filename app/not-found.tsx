import React from "react";
import { Link } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      The page you are looking for doesn&apos;t exist.
      <Link href="/" className="text-sm font-500">
        Go to home
      </Link>
    </div>
  );
}
