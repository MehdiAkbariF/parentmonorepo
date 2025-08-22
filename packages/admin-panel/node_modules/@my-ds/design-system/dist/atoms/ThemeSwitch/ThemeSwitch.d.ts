type Theme = "light" | "dark";
interface ThemeSwitchProps {
    initialTheme?: Theme;
    onToggle?: (theme: Theme) => void;
}
export declare const ThemeSwitch: ({ initialTheme, onToggle }: ThemeSwitchProps) => import("react/jsx-runtime").JSX.Element;
export {};
