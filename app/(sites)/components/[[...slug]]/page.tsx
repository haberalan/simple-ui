import React from "react";

export default function Page({ params }: { params: { slug?: string[] } }) {
  console.log("page-params", params);
  return <div>Page</div>;
}
