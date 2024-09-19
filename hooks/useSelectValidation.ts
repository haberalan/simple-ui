import { useRef, useState } from "react";

type useSelectValidationProps = {
  validation: (value: string | string[]) => boolean;
  multiple?: boolean;
  max?: number;
  base?: string | string[];
};

const useSelectValidation = ({
  validation,
  multiple,
  max,
  base,
}: useSelectValidationProps) => {
  const [value, setValue] = useState<string | string[]>(
    (base ?? multiple) ? [] : "",
  );
  const [touched, setTouched] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const valid = validation(value);

  const status: "valid" | "error" | "default" = touched
    ? valid
      ? "valid"
      : "error"
    : "default";

  const reset = (hard = false) => {
    setTouched(hard);
    setValue([]);
  };

  const handleChange = (e: string) => {
    setValue((prev) => {
      if (Array.isArray(prev)) {
        if (prev.includes(e)) {
          return prev.filter((item) => item !== e);
        } else {
          if (max && prev.length >= max) {
            return [...prev.splice(max - 1), e];
          }

          return [...prev, e];
        }
      } else {
        return e;
      }
    });
  };

  const handleBlur = () => {
    setTouched(true);
  };

  return {
    value,
    setValue,
    handleChange,
    touched,
    setTouched,
    handleBlur,
    valid,
    status,
    reset,
    ref,
  };
};

export default useSelectValidation;
