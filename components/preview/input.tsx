"use client";

import { useState } from "react";
import { Input } from "../ui";

const InputPreview = () => {
  const [value, setValue] = useState("");
  const [type, setType] = useState<"text" | "password">("text");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleTypeChange = () => {
    setType((prev) => (prev === "text" ? "password" : "text"));
  };

  return (
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
  );
};

export default InputPreview;
