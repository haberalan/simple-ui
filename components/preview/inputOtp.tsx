"use client";

import { useState } from "react";
import { InputOTP } from "../ui";

const InputOTPPreview = () => {
  const [disabled, setDisabled] = useState(false);

  const handleChange = async () => {
    setDisabled(true);

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });

    setDisabled(false);

    return false;
  };

  return <InputOTP disabled={disabled} handleFilled={handleChange} />;
};

export default InputOTPPreview;
