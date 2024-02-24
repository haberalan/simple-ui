"use client";

import { useState } from "react";
import { Slider } from "../ui";

const SliderPreview = () => {
  const [value, setValue] = useState(25);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className="w-1/2">
      <Slider value={value} onChange={handleChange} />
    </div>
  );
};

export default SliderPreview;
