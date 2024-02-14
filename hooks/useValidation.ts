import { useRef, useState } from 'react';

type useValidationProps<T> = {
  validation: (value: string) => boolean;
  elementType?: new () => T;
  base?: string;
};

const useValidation = <T extends HTMLInputElement | HTMLTextAreaElement>({
  validation,
  base,
}: useValidationProps<T>) => {
  const [value, setValue] = useState(base ?? '');
  const [touched, setTouched] = useState(false);
  const ref = useRef<T | null>(null);

  const valid = validation(value);

  const status: 'valid' | 'error' | 'default' = touched ? (valid ? 'valid' : 'error') : 'default';

  const reset = (hard = false) => {
    hard ? setTouched(false) : setTouched(true);
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<T>) => {
    setValue(e.target.value);
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

export default useValidation;
