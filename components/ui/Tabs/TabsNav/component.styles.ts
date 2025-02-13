import styles from "@/lib/styles";

const TabsNavWrapper = styles("flex");

const TabsNavInnerWrapper = styles(
  "relative cursor-pointer px-4 py-2 text-sm font-500",
);

const TabsNavStyles = styles(
  "absolute bottom-0 left-0 right-0 w-full rounded-1",
  {
    variant: {
      primary: "h-[1px] bg-black dark:bg-gray-100",
      secondary: "h-full bg-black/10 dark:bg-gray-100/10",
    },
  },
);

export { TabsNavWrapper, TabsNavInnerWrapper, TabsNavStyles };
