import { useEffect, useRef, useState } from "react";
import { OptionType } from "../component.types";

const useSelect = (
  options: OptionType[],
  disabled: boolean,
  onChange: (e: string) => void,
) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const refOptions = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOpen = (e?: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || (e && (e?.target as HTMLDivElement).dataset.badge)) return;
    setOpen((prev) => !prev);
  };

  const handleKeyDownSelect = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((prev) => !prev);
    }
  };

  const handleKeyDownOption = (
    e: React.KeyboardEvent<HTMLLIElement>,
    option: OptionType,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (option.disabled) return;
      onChange(option.label);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        open &&
        refOptions.current &&
        !refOptions.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, options]);

  const handleClickSelectedOption = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: string,
  ) => {
    onChange(item);
  };

  return {
    open,
    search,
    filteredOptions,
    handleSearch,
    handleOpen,
    handleKeyDownSelect,
    handleKeyDownOption,
    handleClickSelectedOption,
    refOptions,
  };
};

export default useSelect;
