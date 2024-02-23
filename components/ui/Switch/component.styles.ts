import styles from "@/lib/styles";

const SwitchStyles = styles(
  "pointer-events-none absolute mx-[2px] h-4 w-4 rounded-full bg-gray-100 shadow-sm transition-colors duration-200 ease-in-out",
  {
    disabled: {
      true: "bg-gray-400 dark:bg-gray-600",
      false: "",
    },
    checked: {
      true: "dark:bg-black",
      false: "",
    },
  },
);

const LabelStyles = styles("text-sm", {
  disabled: {
    true: "text-gray-500 dark:text-gray-600",
    false: "",
  },
});

export { SwitchStyles, LabelStyles };
