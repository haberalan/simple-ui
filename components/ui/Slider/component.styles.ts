import styles from "@/lib/styles";

const SliderWrapperStyles = styles("relative flex w-full");

const SliderStyles = styles(
  "pointer-events-none absolute top-0 h-2 bg-black dark:bg-gray-100",
  {
    disabled: {
      true: "bg-gray-500 dark:bg-gray-500",
      false: "",
    },
  },
);

export { SliderWrapperStyles, SliderStyles };
