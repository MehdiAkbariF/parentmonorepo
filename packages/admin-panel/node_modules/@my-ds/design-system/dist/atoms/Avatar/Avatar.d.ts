import React from "react";
export interface AvatarProps {
    /**
     * آدرس URL تصویر آواتار
     */
    src?: string;
    /**
     * متن جایگزین برای تصویر (مهم برای دسترسی‌پذیری)
     */
    alt?: string;
    /**
     * سایز آواتار
     */
    size?: "sm" | "md" | "lg";
    /**
     * حرف یا متنی که در صورت نبود تصویر نمایش داده می‌شود
     */
    fallback?: React.ReactNode;
}
export declare const Avatar: React.FC<AvatarProps>;
