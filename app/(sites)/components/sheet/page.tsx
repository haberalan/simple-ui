"use client";

import { Button, Icon, Input, Sheet } from "@/components/ui";
import {
  ComponentHeader,
  ComponentPreview,
  ComponentProps,
} from "../_components";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Sheet open={open} handleClose={handleClose}>
        <div className="flex flex-col px-4 py-3">
          <Icon
            name="Close"
            className="size-5 cursor-pointer self-end"
            onClick={handleClose}
          />
          <div className="mt-16 flex w-full flex-col">
            <p className="mb-4 text-2xl font-600">Login</p>
            <Input
              value=""
              placeholder="test"
              label="Username"
              onChange={(_) => _}
              status="valid"
            />
            <Input
              value=""
              placeholder="###"
              label="Password"
              onChange={(_) => _}
              status="valid"
              icon="Eye"
            />
            <Button variant="secondary" size="md">
              Submit
            </Button>
          </div>
          <p className="mx-auto mt-2 text-sm text-gray-700">
            Don&apos;t have account?{" "}
            <span className="font-500 underline">Signup</span>
          </p>
        </div>
      </Sheet>
      <ComponentHeader
        name="Sheet"
        description="Sheets are used to display additional information. They can be used to display additional information, to display additional information, or to display additional information. They can also be used to display additional information, to display additional information, or to display additional information."
      />
      <ComponentPreview
        preview={
          <Button variant="secondary" size="md" onClick={handleOpen}>
            Open Sheet
          </Button>
        }
      />
      <ComponentProps
        elements={[
          {
            name: "Sheet",
            props: [
              {
                name: "open",
                default: "undefined",
                type: "boolean",
                description: "Sheet open state.",
              },
              {
                name: "handleClose",
                default: "undefined",
                type: "() => void",
                description: "Sheet handeClose function event.",
              },
              {
                name: "children",
                default: "undefined",
                type: "React.ReactNode",
                description: "Sheet contents.",
              },
              {
                name: "direction",
                default: "'left'",
                type: "'left' | 'right'",
                description: "Sheet direction from which it opens.",
              },
            ],
          },
        ]}
      />
    </>
  );
}
