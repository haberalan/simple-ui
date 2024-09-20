"use client";

// region Imports
import { useState, useEffect, useRef } from "react";
import { InputOTPStyles } from "./component.styles";
import { InputOTPProps } from "./component.types";
// endregion

// region Constants
const INPUT_LENGTH = 6;
const PLACES = [
  "leftEdge",
  "center",
  "right",
  "left",
  "center",
  "rightEdge",
] as const;
// endregion

// region Component
/**
 * @name InputOTP
 * @param {InputOTPProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const InputOTP: React.FC<InputOTPProps> = (props) => {
  const [value, setValue] = useState<string[]>(Array(INPUT_LENGTH).fill(""));
  const [shouldFocusFirstInput, setShouldFocusFirstInput] = useState(false);

  const refs = useRef<(HTMLInputElement | null)[]>(
    Array(INPUT_LENGTH).fill(null),
  );

  const status = props.disabled ? "disabled" : "default";

  const handleUpdate = (index: number, val: string) => {
    const newValue = [...value];
    newValue[index] = val.slice(-1) || "";
    setValue(newValue);

    if (val && index < INPUT_LENGTH - 1) {
      refs.current[index + 1]?.focus();
    }

    if (newValue.every((v) => v !== "")) {
      const code = newValue.join("");
      handleFilledData(code);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedData = e.clipboardData.getData("Text").trim();
    if (/^\d+$/.test(pastedData)) {
      const input = e.target as HTMLInputElement;
      const index = refs.current.findIndex((ref) => ref === input);
      const newValue = [...value];
      const chars = pastedData.slice(0, INPUT_LENGTH - index).split("");

      chars.forEach((char, i) => {
        newValue[index + i] = char;
      });

      setValue(newValue);

      const nextIndex = index + chars.length;
      if (nextIndex < INPUT_LENGTH) {
        refs.current[nextIndex]?.focus();
      }

      if (newValue.every((v) => v !== "")) {
        const code = newValue.join("");
        handleFilledData(code);
      }
    }
  };

  const handleKeyDown =
    (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace" && !value[index] && index > 0) {
        refs.current[index - 1]?.focus();
      }
    };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleFilledData = async (code: string) => {
    try {
      const res = await props.handleFilled?.(code);
      if (res === true) return;

      setValue(Array(INPUT_LENGTH).fill(""));
      setShouldFocusFirstInput(true);
    } catch (error) {
      console.error(error);
    }
  };

  const pushRef = (el: HTMLInputElement | null, index: number) => {
    refs.current[index] = el;
  };

  useEffect(() => {
    if (shouldFocusFirstInput) {
      refs.current[0]?.focus();
      setShouldFocusFirstInput(false);
    }
  }, [shouldFocusFirstInput]);

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[0, 1, 2].map((index) => (
          <input
            key={index}
            ref={(el) => pushRef(el, index)}
            value={value[index]}
            onChange={(e) => handleUpdate(index, e.target.value)}
            onKeyDown={handleKeyDown(index)}
            onPaste={handlePaste}
            onFocus={handleFocus}
            disabled={props.disabled}
            className={InputOTPStyles({ status, place: PLACES[index] })}
            type="text"
            maxLength={1}
            inputMode="numeric"
            pattern="\d*"
          />
        ))}
      </div>
      <div className="h-[2px] w-1 rounded-1 bg-black dark:bg-gray-100"></div>
      <div className="flex">
        {[3, 4, 5].map((index) => (
          <input
            key={index}
            ref={(el) => pushRef(el, index)}
            value={value[index]}
            onChange={(e) => handleUpdate(index, e.target.value)}
            onKeyDown={handleKeyDown(index)}
            onPaste={handlePaste}
            onFocus={handleFocus}
            disabled={props.disabled}
            className={InputOTPStyles({ status, place: PLACES[index] })}
            type="text"
            maxLength={1}
            inputMode="numeric"
            pattern="\d*"
          />
        ))}
      </div>
    </div>
  );
};
// endregion

export default InputOTP;
