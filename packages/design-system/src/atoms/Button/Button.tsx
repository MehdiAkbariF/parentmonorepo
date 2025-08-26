import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  isLoading?: boolean;
}
export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', isLoading = false, ...props }) => {
  return (
    <button className={`button button--${variant}`} disabled={isLoading} {...props}>
      {isLoading ? <span className="button__loader" /> : children}
    </button>
  );
};