import { useState } from "react";

type ValueType<M extends boolean> = M extends true ? string[] : string;

type UseSelectValidationProps<M extends boolean> = {
  validation: ((value: ValueType<M>) => true | string)[];
  multiple: M;
  max?: number;
  base?: ValueType<M>;
};

function useSelectValidation<M extends boolean>({
  validation,
  multiple,
  max,
  base,
}: UseSelectValidationProps<M>) {
  const [value, setValue] = useState<ValueType<M>>(
    base ?? ((multiple ? [] : "") as ValueType<M>),
  );
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const onChange = (e: string) => {
    if (error) setError(undefined);

    if (multiple) {
      setValue((prevValue) => {
        const prevArray = prevValue as unknown as string[];
        if (prevArray.includes(e)) {
          return prevArray.filter((item) => item !== e) as ValueType<M>;
        } else {
          if (max && prevArray.length >= max) {
            return [...prevArray.slice(1), e] as ValueType<M>;
          }
          return [...prevArray, e] as ValueType<M>;
        }
      });
    } else {
      setValue(e as ValueType<M>);
    }
  };

  const onBlur = () => {
    setTouched(true);
  };

  const parsedValidation = validation.find((v) => v(value) !== true);

  const valid = !error && !parsedValidation;

  const status: "valid" | "error" | "default" = touched
    ? valid
      ? "valid"
      : "error"
    : "default";

  const errorText =
    error ??
    (parsedValidation && typeof parsedValidation === "function"
      ? (parsedValidation(value) as string)
      : undefined);

  const reset = (hard = false) => {
    setTouched(!hard);
    setValue((multiple ? [] : "") as ValueType<M>);
    setError(undefined);
  };

  const handleError = (message: string) => {
    setError(message);
    setTouched(true);
  };

  return {
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
}

export default useSelectValidation;
