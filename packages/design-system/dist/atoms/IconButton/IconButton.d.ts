import { ButtonHTMLAttributes, ReactNode } from "react";
interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "primary" | "secondary" | "danger";
}
export declare const IconButton: ({ icon, size, variant, ...props }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
