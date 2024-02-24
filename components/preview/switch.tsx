"use client";

import { useState } from "react";
import { Switch } from "../ui";

const SwitchPreview = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Switch checked={checked} onClick={handleClick}>
      Toggle me!
    </Switch>
  );
};

export default SwitchPreview;
