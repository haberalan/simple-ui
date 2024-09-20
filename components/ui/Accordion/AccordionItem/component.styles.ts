import styles from "@/lib/styles";

const AccordionItemStyles = styles(
  "border-b border-solid border-gray-500 py-2",
);

const IconStyles = styles(
  "h-5 w-5 transition-transform duration-200 ease-in-out",
  {
    open: {
      true: "rotate-180",
      false: "",
    },
  },
);

export { AccordionItemStyles, IconStyles };
