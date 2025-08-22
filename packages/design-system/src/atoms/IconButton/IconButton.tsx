"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";


interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary" | "danger";
}

export const IconButton = ({
  icon,
  size = "md",
  variant = "default",
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className={`icon-button icon-button--${size} icon-button--${variant}`}
      {...props}
    >
      {icon}
    </button>
  );
};
