"use client";

import { Radio } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useState } from "react";

export default function Page() {
  const [checked, setChecked] = useState("easy");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };

  return (
    <>
      <ComponentHeader
        name="Radio"
        description="Radios are used to select one option from a list. They can be used to select one option from a list, to select one option from a group of options, or to select one option from a list of options."
      />
      <ComponentPreview
        preview={
          <div className="flex flex-col gap-1">
            <Radio
              checked={checked}
              onChange={handleChange}
              id="easy"
              name="difficulty"
              label="Easy mode"
            />
            <Radio
              checked={checked}
              onChange={handleChange}
              id="medium"
              name="difficulty"
              label="Medium mode"
            />
            <Radio
              checked={checked}
              onChange={handleChange}
              id="hard"
              name="difficulty"
              label="Hard mode"
            />
          </div>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Radio",
            props: [
              {
                name: "checked",
                default: "undefined",
                type: "string",
                description: "Radio value.",
              },
              {
                name: "onChange",
                default: "undefined",
                type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
                description: "Radio onChange event.",
              },
              {
                name: "id",
                default: "undefined",
                type: "string",
                description: "Radio id.",
              },
              {
                name: "name",
                default: "undefined",
                type: "string",
                description: "Radio name.",
              },
              {
                name: "label",
                default: "undefined",
                type: "string",
                description: "Radio label.",
              },
              {
                name: "disabled",
                default: "undefined",
                type: "boolean",
                description: "Radio disabled.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
