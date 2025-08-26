import React, { ReactNode } from "react";
export type BadgeVariant = 'info' | 'success' | 'warning' | 'danger' | 'neutral';
export interface BadgeProps {
    label: string;
    variant?: BadgeVariant;
    icon?: ReactNode;
}
export declare const Badge: React.FC<BadgeProps>;
