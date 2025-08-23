import React, { ReactNode } from "react";
export type LabelVariant = "primary" | "secondary" | "error" | "disabled";
export type LabelSize = "xs" | "sm" | "md" | "lg" | "xl" | "2x" | "3x" | "4x";
/**
 * پراپرتی‌های کامپوننت Label.
 * این اینترفیس تمام پراپرتی‌های استاندارد یک تگ <span> را به ارث می‌برد (مانند style, className, onClick).
 */
export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
    /**
     * متن اصلی که نمایش داده می‌شود.
     */
    text: string;
    /**
     * ظاهر رنگی لیبل.
     * @default 'primary'
     */
    variant?: LabelVariant;
    /**
     * اندازه و وزن فونت لیبل.
     * @default 'md'
     */
    size?: LabelSize;
    /**
     * یک آیکون که در کنار متن نمایش داده می‌شود.
     */
    icon?: ReactNode;
}
/**
 * Label یک اتم برای نمایش متن با استایل‌های از پیش تعریف شده است.
 * این کامپوننت برای ثبات در تایپوگرافی در سراسر اپلیکیشن استفاده می‌شود.
 */
export declare const Label: React.FC<LabelProps>;
