"use client";

import { Input } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");
  const [type, setType] = useState<"text" | "password">("text");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleTypeChange = () => {
    setType((prev) => (prev === "text" ? "password" : "text"));
  };
  return (
    <>
      <ComponentHeader
        name="Input"
        description="Inputs are used to collect data from the user. They can be used to collect a variety of data types, such as text, numbers, dates, and files. They can also be used to collect data in a variety of formats, such as text, numbers, dates, and files."
      />
      <ComponentPreview
        preview={
          <div className="w-[280px]">
            <Input
              status="default"
              icon={type === "text" ? "EyeOff" : "Eye"}
              iconPositon="right"
              value={value}
              onChange={handleChange}
              onIconClick={handleTypeChange}
              label="Password"
              placeholder="###"
              helperText="Enter your password."
              type={type}
            />
          </div>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Input",
            props: [
              {
                name: "value",
                default: "undefined",
                type: "string",
                description: "Input value.",
              },
              {
                name: "status",
                default: "'default'",
                type: "'valid' | 'error' | 'default'",
                description: "Input status.",
              },
              {
                name: "onChange",
                default: "undefined",
                type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
                description: "Input onChange event.",
              },
              {
                name: "onBlur",
                default: "undefined",
                type: "(e: React.FocusEvent<HTMLInputElement>) => void",
                description: "Input onBlur event.",
              },
              {
                name: "icon",
                default: "undefined",
                type: "keyof typeof ICONS",
                description: "Adds icon to the input",
              },
              {
                name: "iconPositon",
                default: "undefined",
                type: "'left' | 'right'",
                description: "Icon position",
              },
              {
                name: "onIconClick",
                default: "undefined",
                type: "() => void",
                description: "Icon onClick event.",
              },
              {
                name: "type",
                default: "'text'",
                type: "'text' | 'number' | 'password' | 'email'",
                description: "Input type.",
              },
              {
                name: "label",
                default: "undefined",
                type: "string",
                description: "Input label.",
              },
              {
                name: "placeholder",
                default: "undefined",
                type: "string",
                description: "Input placeholder.",
              },
              {
                name: "disabled",
                default: "undefined",
                type: "boolean",
                description: "Input disabled.",
              },
              {
                name: "helperText",
                default: "undefined",
                type: "string",
                description: "Input helper text.",
              },
              {
                name: "errorText",
                default: "undefined",
                type: "string",
                description: "Input error text.",
              },
              {
                name: "autoFocus",
                default: "undefined",
                type: "boolean",
                description: "Input auto focus.",
              },
              {
                name: "hideHelper",
                default: "undefined",
                type: "boolean",
                description: "Hides the helper text wrapper.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
