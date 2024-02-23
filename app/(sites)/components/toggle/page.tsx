"use client";

import { Toggle } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useState } from "react";

export default function Page() {
  const [toggled, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <ComponentHeader
        name="Toggle"
        description="Toggle is used to change the state of a component. It can be used to change the state of a component, to change the state of a component, or to change the state of a component. It can also be used to change the state of a component, to change the state of a component, or to change the state of a component."
      />
      <ComponentPreview
        preview={
          <Toggle
            toggled={toggled}
            onClick={handleClick}
            variant="primary"
            icon="Sunset"
            label="Toggle me!"
          />
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Toggle",
            props: [
              {
                name: "variant",
                default: "undefined",
                type: "'primary' | 'secondary'",
                description: "Toggle variant.",
              },
              {
                name: "toggled",
                default: "false",
                type: "boolean",
                description: "Toggle state.",
              },
              {
                name: "icon",
                default: "undefined",
                type: "string",
                description: "Toggle icon.",
              },
              {
                name: "label",
                default: "undefined",
                type: "string",
                description: "Toggle label.",
              },
              {
                name: "onClick",
                default: "undefined",
                type: "() => void",
                description: "Toggle onClick event.",
              },
              {
                name: "disabled",
                default: "false",
                type: "boolean",
                description: "Toggle disabled state.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
