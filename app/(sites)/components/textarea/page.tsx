"use client";

import { Textarea } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useState } from "react";

export default function Page() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <ComponentHeader
        name="Textarea"
        description="Textareas are used to input large amounts of text. They can be used to input large amounts of text, to input large amounts of text, or to input large amounts of text. They can also be used to input large amounts of text, to input large amounts of text, or to input large amounts of text."
      />
      <ComponentPreview
        preview={
          <div className="w-3/4">
            <Textarea
              label="Description"
              placeholder="Type something here..."
              helperText="This is a helper text."
              value={value}
              onChange={handleChange}
              status="default"
              rows={7}
            />
          </div>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Textarea",
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
                type: "(e: React.ChangeEvent<HTMLTextAreaElement>) => void",
                description: "Input onChange event.",
              },
              {
                name: "onBlur",
                default: "undefined",
                type: "(e: React.FocusEvent<HTMLTextAreaElement>) => void",
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
                name: "noResize",
                default: "undefined",
                type: "boolean",
                description: "Input no resize.",
              },
              {
                name: "rows",
                default: "3",
                type: "number",
                description: "Input rows.",
              },
              {
                name: "maxLength",
                default: "undefined",
                type: "number",
                description: "Input max length.",
              },
              {
                name: "alignText",
                default: "undefined",
                type: "'left' | 'center' | 'right'",
                description: "Textarea align helper text.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
