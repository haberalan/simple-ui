import styles from "@/lib/styles";

const InputOTPStyles = styles(
  "peer w-10 relative focus-visible:z-10 text-center h-12 transition-colors ease-in-out duration-150 border border-gray-300 dark:border-gray-900 p-0 text-sm placeholder:text-gray-500 placeholder:dark:text-gray-700 focus-visible:dark:outline-gray-800 font-500 text-lg",
  {
    status: {
      default:
        "bg-white dark:bg-gray-1000 focus-visible:border-gray-500 focus-visible:dark:border-gray-600",
      disabled: "bg-gray-200 text-gray-400 dark:bg-gray-900 dark:text-gray-700",
    },
    place: {
      left: "rounded-l-1",
      leftEdge: "rounded-l-3",
      right: "rounded-r-1",
      rightEdge: "rounded-r-3",
      center: "",
    },
  },
);

export { InputOTPStyles };
