import React, { ElementType, ReactNode } from "react";
export type LabelVariant = "primary" | "secondary" | "error" | "disabled";
export type LabelSize = "xs" | "sm" | "md" | "lg" | "xl" | "2x" | "3x" | "4x";
type LabelOwnProps<E extends ElementType = ElementType> = {
    text: string;
    variant?: LabelVariant;
    size?: LabelSize;
    icon?: ReactNode;
    as?: E;
    /**
     * ✨ پراپرتی جدید ✨
     * اگر true باشد، متن طولانی را با "..." نمایش می‌دهد.
     * @default true
     */
    truncate?: boolean;
};
export type LabelProps<E extends ElementType> = LabelOwnProps<E> & Omit<React.ComponentProps<E>, keyof LabelOwnProps<E>>;
export declare const Label: <E extends ElementType = "span">({ text, variant, size, icon, as, className, truncate, ...props }: LabelProps<E>) => import("react/jsx-runtime").JSX.Element;
export {};
