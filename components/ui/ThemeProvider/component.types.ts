type ThemeContextProps = {
  /**
   * Theme
   */
  theme: "light" | "dark";
  /**
   * Toggle theme
   */
  changeTheme: (theme: "light" | "dark") => void;
};

type ThemeProviderProps = {
  /**
   * Content
   */
  children: React.ReactNode;
};

export { type ThemeContextProps, type ThemeProviderProps };
