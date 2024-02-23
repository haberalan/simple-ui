"use client";

import { AlertContext, Button } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useContext } from "react";

export default function Page() {
  const ctxAlert = useContext(AlertContext);

  const handleClick = () => {
    ctxAlert.push({
      label: "Alert",
      children: "This is an alert",
      icon: "Sunset",
      timer: true,
    });
  };

  return (
    <>
      <ComponentHeader
        name="Alert"
        description="Alerts are used to communicate a state that affects the entire system. They can be used to inform the user about a successful operation, an error, a warning, or a general information."
      />
      <ComponentPreview
        preview={
          <Button variant="secondary" size="md" onClick={handleClick}>
            Push Alert
          </Button>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "AlertProvider",
            props: [
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode",
                description: "Content of the provider.",
              },
            ],
          },
          {
            name: "Alert",
            props: [
              {
                name: "key",
                default: "undefined",
                type: "string",
                description: "Unique key for the alert.",
              },
              {
                name: "label",
                default: "undefined",
                type: "string",
                description: "Alert label.",
              },
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode",
                description: "Alert description.",
              },
              {
                name: "icon",
                default: "undefined",
                type: "keyof typeof ICONS",
                description: "Icon of the alert.",
              },
              {
                name: "action",
                default: "undefined",
                type: "ButtonProps",
                description: "Action button.",
              },
              {
                name: "timer",
                default: "undefined",
                type: "boolean",
                description: "Shows timer of the alert.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
