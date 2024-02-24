"use client";

import { useState } from "react";
import { Checkbox } from "../ui";

const CheckboxPreview = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Checkbox checked={checked} onClick={handleClick}>
      Label
    </Checkbox>
  );
};

export default CheckboxPreview;
