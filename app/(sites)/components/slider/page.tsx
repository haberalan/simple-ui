"use client";

import { Slider } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState(25);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <>
      <ComponentHeader
        name="Slider"
        description="Sliders are used to select a value from a range. They can be used to select a value from a range, to select a value from a group of values, or to select a value from a list of values. They can also be used to select a value from a range, to select a value from a group of values, or to select a value from a list of values."
      />
      <ComponentPreview
        preview={
          <div className="w-1/2">
            <Slider value={value} onChange={handleChange} />
          </div>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Slider",
            props: [
              {
                name: "value",
                default: "undefined",
                type: "number",
                description: "Slider value.",
              },
              {
                name: "onChange",
                default: "undefined",
                type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
                description: "Slider change event.",
              },
              {
                name: "min",
                default: "0",
                type: "number",
                description: "Slider minimum value.",
              },
              {
                name: "max",
                default: "100",
                type: "number",
                description: "Slider maximum value.",
              },
              {
                name: "step",
                default: "1",
                type: "number",
                description: "Slider step value.",
              },
              {
                name: "disabled",
                default: "false",
                type: "boolean",
                description: "Disables the slider.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
