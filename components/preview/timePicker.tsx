"use client";

import { useState } from "react";
import TimePicker from "../ui/TimePicker/component";

const TimePickerPreview = () => {
  const [value, setValue] = useState({ hour: 0, minute: 0 });

  return <TimePicker value={value} setValue={setValue} />;
};

export default TimePickerPreview;
