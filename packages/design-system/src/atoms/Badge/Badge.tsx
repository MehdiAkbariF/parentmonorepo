import React, { ReactNode } from "react";

export type BadgeVariant = 'info' | 'success' | 'warning' | 'danger' | 'neutral';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  icon?: ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'neutral', icon }) => {
  return (
    <div className={`badge badge--${variant}`}>
      {icon && <span className="badge__icon">{icon}</span>}
      <span>{label}</span>
    </div>
  );
};