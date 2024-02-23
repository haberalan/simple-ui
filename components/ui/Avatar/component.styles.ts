import styles from "@/lib/styles";

const AvatarWrapperStyles = styles(
  "relative flex w-fit items-center justify-center overflow-hidden rounded-full bg-gray-200 text-black dark:bg-gray-900 dark:text-gray-100",
);

const AvatarImageStyles = styles(
  "flex aspect-square items-center overflow-hidden rounded-full text-center text-[0]",
  {
    show: {
      true: "",
      false: "opacity-0",
    },
  },
);

export { AvatarWrapperStyles, AvatarImageStyles };
