import { useRef, useState } from "react";

type useValidationProps<T> = {
  validation: ((value: string) => true | string)[];
  elementType?: new () => T;
  base?: string;
};

const useValidation = <T extends HTMLInputElement | HTMLTextAreaElement>({
  validation,
  base,
}: useValidationProps<T>) => {
  const [value, setValue] = useState(base ?? "");
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const ref = useRef<T | null>(null);

  const onChange = (e: React.ChangeEvent<T>) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    if (error) setError(undefined);
    setTouched(true);
  };

  const valid = !error && validation.every((v) => v(value) === true);

  const status: "valid" | "error" | "default" = touched
    ? valid
      ? "valid"
      : "error"
    : "default";

  const parsedValidation = validation.find((v) => v(value) !== true) as (
    v: string,
  ) => string;

  const errorText =
    error ??
    (typeof parsedValidation === "function"
      ? parsedValidation(value)
      : undefined);

  const reset = (hard = false) => {
    setTouched(hard);
    setValue("");
  };

  const handleError = (message: string) => {
    setError(message);
    setTouched(true);
  };

  return {
    ref,
    value,
    status,
    touched,
    errorText,
    valid,
    reset,
    onChange,
    handleError,
    setTouched,
    onBlur,
  };
};

export default useValidation;
