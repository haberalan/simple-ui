import styles from "@/lib/styles";

const ThemeStyles = styles(
  "text-left transition-all text-sm hover:bg-gray-200 dark:hover:bg-gray-900 rounded-1 px-2 py-1 font-500 flex gap-5 items-center justify-between",
  {
    selected: {
      true: "bg-gray-200 dark:bg-gray-900",
      false: "",
    },
  },
);

export { ThemeStyles };
