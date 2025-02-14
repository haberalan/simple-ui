"use client";

import { useState } from "react";
import { Toggle } from "../ui";

const TogglePreview = () => {
  const [toggled, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Toggle
      toggled={toggled}
      onClick={handleClick}
      variant="primary"
      icon="sun"
      label="Toggle me!"
    />
  );
};

export default TogglePreview;
