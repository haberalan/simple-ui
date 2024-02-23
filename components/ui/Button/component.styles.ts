import styles from "@/lib/styles";

const ButtonStyles = styles(
  "relative h-8 font-500 transition-all duration-200 ease-in-out hover:shadow-sm flex items-center justify-center gap-2 disabled:pointer-events-none",
  {
    variant: {
      primary:
        "bg-gray-800 hover:bg-gray-700 dark:bg-gray-900 hover:dark:bg-gray-800 text-gray-100 dark:disabled:bg-gray-600 dark:disabled:text-gray-700 disabled:text-gray-600",
      secondary:
        "bg-gray-300 hover:bg-gray-200 hover:dark:bg-gray-100 text-black dark:disabled:bg-gray-400 dark:disabled:text-gray-500 disabled:text-gray-500",
      tertiary:
        "bg-transparent border border-solid border-gray-300 dark:border-gray-800 hover:bg-gray-200 hover:dark:bg-gray-800 text-black dark:text-gray-100 dark:disabled:border-gray-900 dark:disabled:text-gray-500 dark:disabled:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-400",
      quaternary:
        "hover:dark:text-gray-100 hover:bg-gray-200 hover:dark:bg-gray-800 disabled:text-gray-700",
    },
    size: {
      sm: "px-5 py-1 text-button-sm",
      md: "px-6 py-1 text-button-md",
      lg: "px-7 py-1 text-button-lg",
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-1",
    },
  },
);

const IconStyles = styles("h-5 w-5 shrink-0", {
  position: {
    left: "-ml-2",
    right: "order-1 -mr-2",
  },
});

const LinkStyles = styles("rounded-1", {
  disabled: {
    true: "pointer-events-none",
    false: "",
  },
});

export { ButtonStyles, IconStyles, LinkStyles };
