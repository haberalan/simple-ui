import styles from "@/lib/styles";

const TableOfConentsStyles = styles("flex w-full max-w-[200px] flex-col gap-8");

const ItemStyles = styles(
  "text-sm line-clamp-1 transition-all duration-150 ease-in-out cursor-pointer",
  {
    node: {
      H2: "ml-0",
      H3: "ml-1",
      H4: "ml-2",
      H5: "ml-3",
      H6: "ml-4",
    },
    active: {
      true: "font-600",
      false:
        "text-gray-700 dark:text-gray-600 hover:text-black dark:hover:text-gray-100",
    },
  },
);

export { TableOfConentsStyles, ItemStyles };
