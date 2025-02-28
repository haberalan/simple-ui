"use client";

import { IconName, ICONS } from "@/assets/icons";
import { Select } from "../ui";
import { useState } from "react";

const OPTIONS = Object.keys(ICONS).map((item) => ({ label: item }));

const SelectPreview = () => {
  const [value, setValue] = useState<IconName>("sun");

  const handleChange = (e: string) => {
    setValue(e as IconName);
  };

  return (
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
  );
};

export default SelectPreview;
