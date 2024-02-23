"use client";

// region Imports
import React, { createContext, useEffect, useState } from "react";
import { ThemeContextProps, ThemeProviderProps } from "./component.types";
// endregion

// region Context
const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  changeTheme: () => {},
});
// endregion

// region Helper
const getTheme = () => {
  if (typeof window !== "undefined") {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    const theme = window.localStorage.getItem("theme");

    if (theme) {
      return theme as "light" | "dark";
    }

    return darkModeMediaQuery.matches ? "dark" : "light";
  }

  return "dark";
};
// endregion

// region Component
/**
 * @name ThemeProvider
 * @param {ThemeProviderProps} props The props of the component
 * @returns {React.ReactElement} The React element
 */
const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const [theme, setTheme] = useState<"light" | "dark">(getTheme());
  const [mounted, setMounted] = useState(false);

  const changeTheme = (theme: "light" | "dark") => {
    window.localStorage.setItem("theme", theme);

    setTheme(theme);
  };

  useEffect(() => {
    setMounted(true);

    const listener = (event: StorageEvent) => {
      if (event.key === "theme") {
        setTheme(event.newValue as "light" | "dark");
      }
    };

    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      body.classList.remove("light", "dark");
      body.classList.add(theme);
    }
  }, [theme]);

  useEffect(() => {
    const body = document.querySelector("body");

    const timer = setTimeout(() => {
      if (body) {
        body.classList.add("loaded");
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
// endregion

export { ThemeContext };
export default ThemeProvider;
