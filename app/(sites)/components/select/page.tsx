"use client";

import { Select } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useState } from "react";
import { ICONS } from "@/assets/assets";

const OPTIONS = Object.keys(ICONS).map((item) => ({ label: item }));

export default function Page() {
  const [value, setValue] = useState<keyof typeof ICONS>("Sunset");

  const handleChange = (e: string) => {
    setValue(e as keyof typeof ICONS);
  };

  return (
    <>
      <ComponentHeader
        name="Select"
        description="Selects are used to select one option from a list. They can be used to select one option from a list, to select one option from a group of options, or to select one option from a list of options. They can also be used to select one option from a list of options, to select one option from a group of options, or to select one option from a list of options."
      />
      <ComponentPreview
        preview={
          <div className="mb-10 w-full max-w-[240px]">
            <Select
              status="default"
              value={value}
              onChange={handleChange}
              options={OPTIONS}
              helperText="Select your favorite icon."
              search
            />
          </div>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Select",
            props: [
              {
                name: "options",
                default: "undefined",
                type: "OptionType[]",
                description: "Select options.",
              },
              {
                name: "status",
                default: "undefined",
                type: "'valid' | 'error' | 'default'",
                description: "Select status.",
              },
              {
                name: "onChange",
                default: "undefined",
                type: "(e: string) => void",
                description: "Select onChange event.",
              },
              {
                name: "onBlur",
                default: "undefined",
                type: "(e: React.FocusEvent<HTMLDivElement>) => void",
                description: "Select onBlur event.",
              },
              {
                name: "search",
                default: "undefined",
                type: "boolean",
                description: "If true adds search to the select dropdown.",
              },
              {
                name: "multiple",
                default: "undefined",
                type: "boolean",
                description: "If true sets select as multiple.",
              },
              {
                name: "label",
                default: "undefined",
                type: "string",
                description: "Select label.",
              },

              {
                name: "placeholder",
                default: "undefined",
                type: "string",
                description: "Select placeholder.",
              },
              {
                name: "disabled",
                default: "undefined",
                type: "boolean",
                description: "Select disabled.",
              },
              {
                name: "multiple",
                default: "undefined",
                type: "boolean",
                description: "If true sets select as multiple.",
              },
              {
                name: "helperText",
                default: "undefined",
                type: "string",
                description: "Select helper text.",
              },
              {
                name: "errorText",
                default: "undefined",
                type: "string",
                description: "Select error text.",
              },
              {
                name: "autoFocus",
                default: "undefined",
                type: "boolean",
                description: "Select autoFocus.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
