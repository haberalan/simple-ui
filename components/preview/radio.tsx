"use client";

import { Radio } from "../ui";
import { useState } from "react";

const RadioPreview = () => {
  const [checked, setChecked] = useState("easy");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.value);
  };

  return (
    <div className="flex flex-col gap-1">
      <Radio
        checked={checked}
        onChange={handleChange}
        id="easy"
        name="difficulty"
        label="Easy mode"
      />
      <Radio
        checked={checked}
        onChange={handleChange}
        id="medium"
        name="difficulty"
        label="Medium mode"
      />
      <Radio
        checked={checked}
        onChange={handleChange}
        id="hard"
        name="difficulty"
        label="Hard mode"
      />
    </div>
  );
};

export default RadioPreview;
