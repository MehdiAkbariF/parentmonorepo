import React, { ElementType, ReactNode } from "react";
export type LabelVariant = "primary" | "secondary" | "error" | "disabled";
export type LabelSize = "xs" | "sm" | "md" | "lg" | "xl" | "2x" | "3x" | "4x";
type LabelOwnProps<E extends ElementType = ElementType> = {
    text: string;
    variant?: LabelVariant;
    size?: LabelSize;
    icon?: ReactNode;
    /**
     * تگ HTML یا کامپوننت React که باید رندر شود.
     * @default 'span'
     */
    as?: E;
};
export type LabelProps<E extends ElementType> = LabelOwnProps<E> & Omit<React.ComponentProps<E>, keyof LabelOwnProps<E>>;
/**
 * Label یک اتم پلی‌مورفیک برای نمایش متن با استایل‌های از پیش تعریف شده است.
 * می‌تواند به عنوان span, label, p, h1 و ... رندر شود.
 */
export declare const Label: <E extends ElementType = "span">({ text, variant, size, icon, as, className, ...props }: LabelProps<E>) => import("react/jsx-runtime").JSX.Element;
export {};
