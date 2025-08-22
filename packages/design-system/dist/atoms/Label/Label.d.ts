import React from "react";
export type LabelVariant = "primary" | "secondary" | "error" | "disabled";
export type LabelSize = "xs" | "sm" | "md" | "lg" | "xl" | "2x" | "3x" | "4x";
export interface LabelProps {
    text: string;
    variant?: LabelVariant;
    size?: LabelSize;
    icon?: React.ReactNode;
}
export declare const Label: React.FC<LabelProps>;
