"use client";

import { useState } from "react";
import { Calendar } from "../ui";

const CalendarPreview = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <Calendar
      value={selectedDate}
      setValue={setSelectedDate}
      startOfWeek="Monday"
    />
  );
};

export default CalendarPreview;
