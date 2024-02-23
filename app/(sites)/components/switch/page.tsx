"use client";

import { Switch } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useState } from "react";

export default function Page() {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      <ComponentHeader
        name="Switch"
        description="Switches are used to toggle between two states. They can be used to toggle between two states, to toggle between two options, or to toggle between two values. They can also be used to toggle between two states, to toggle between two options, or to toggle between two values."
      />
      <ComponentPreview
        preview={
          <Switch checked={checked} onClick={handleClick}>
            Toggle me!
          </Switch>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Switch",
            props: [
              {
                name: "checked",
                default: "undefined",
                type: "boolean",
                description: "Switch checked state.",
              },
              {
                name: "onClick",
                default: "undefined",
                type: "() => void",
                description: "Switch onClick event.",
              },
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode",
                description: "Switch label.",
              },
              {
                name: "disabled",
                default: "undefined",
                type: "boolean",
                description: "Switch disabled.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
