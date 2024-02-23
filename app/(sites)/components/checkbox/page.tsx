"use client";

import { Checkbox } from "@/components/ui";
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
        name="Checkbox"
        description="Checkboxes are used to select one or more options from a list of options. They can be used to select multiple options at the same time, or to select a single option from a list of options."
      />
      <ComponentPreview
        preview={
          <Checkbox checked={checked} onClick={handleClick}>
            Label
          </Checkbox>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Checkbox",
            props: [
              {
                name: "checked",
                default: "false",
                type: "boolean",
                description: "Checkbox checked state.",
              },
              {
                name: "onClick",
                default: "undefined",
                type: "() => void",
                description: "Checkbox onClick event.",
              },
              {
                name: "children",
                default: "undefined",
                type: "React.ReactElement | React.ReactNode",
                description: "Checkbox label.",
              },
              {
                name: "disabled",
                default: "undefined",
                type: "boolean",
                description: "Checkbox disabled state.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
