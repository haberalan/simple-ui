"use client";

import { useState } from "react";
import { Textarea } from "../ui";

const TextareaPreview = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
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
  );
};

export default TextareaPreview;
