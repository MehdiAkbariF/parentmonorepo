"use client";

import { useEffect, useState } from "react";


type Theme = "light" | "dark";

interface ThemeSwitchProps {
  initialTheme?: Theme;
  onToggle?: (theme: Theme) => void;
}

export const ThemeSwitch = ({ initialTheme = "light", onToggle }: ThemeSwitchProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    onToggle?.(theme);
  }, [theme, onToggle]);

  return (
    <button
      className="theme-switch"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
