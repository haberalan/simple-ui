"use client";

import { Button, useThemeContext } from "@/components/ui";

const ThemePreview = () => {
  const ctxTheme = useThemeContext();

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
