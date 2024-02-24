"use client";

import { Button, ThemeContext } from "@/components/ui";
import { useContext } from "react";

const ThemePreview = () => {
  const ctxTheme = useContext(ThemeContext);

  const handleClick = () => {
    ctxTheme.changeTheme(ctxTheme.theme === "light" ? "dark" : "light");
  };

  return (
    <Button variant="secondary" size="md" onClick={handleClick}>
      Toggle Theme
    </Button>
  );
};

export default ThemePreview;
