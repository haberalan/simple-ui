import styles from "@/lib/styles";

const SheetStyles = styles(
  "fixed top-0 z-50 h-full w-full max-w-[360px] border-gray-300 bg-gray-100 shadow-xl dark:border-gray-900 dark:bg-black",
  {
    direction: {
      left: "left-0 border-r",
      right: "right-0 border-l",
    },
  },
);

export { SheetStyles };
