"use client";

import { useState } from "react";
import { Button, Icon, Input, Sheet } from "../ui";

const ScalePreview = () => {
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
            name="close"
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
              icon="eye"
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
      <Button variant="secondary" size="md" onClick={handleOpen}>
        Open Sheet
      </Button>
    </>
  );
};

export default ScalePreview;
