import styles from "@/lib/styles";

const CalendarDayStyles = styles(
  "flex size-[28px] items-center justify-center rounded-1 p-1",
  {
    currentMonth: {
      true: "dark:text-gray-300",
      false: "text-gray-500 dark:text-gray-600",
    },
    selected: {
      true: "bg-black text-white hover:bg-black dark:bg-white dark:!text-black dark:hover:bg-white",
      false: "hover:bg-gray-300 dark:hover:bg-gray-700",
    },
    disabled: {
      true: "cursor-default pointer-events-none",
      false: "cursor-pointer",
    },
  },
);

export { CalendarDayStyles };
