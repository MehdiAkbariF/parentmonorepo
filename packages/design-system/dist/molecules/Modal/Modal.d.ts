import React, { ReactNode } from "react";
export interface ModalProps {
    /**
     * آیا مودال باز و قابل مشاهده است؟
     */
    isOpen: boolean;
    /**
     * تابعی که با درخواست بسته شدن مودال (کلیک روی X یا overlay) فراخوانی می‌شود
     */
    onClose: () => void;
    /**
     * عنوان مودال
     */
    title: string;
    /**
     * محتوای اصلی بدنه مودال
     */
    children: ReactNode;
    /**
     * (اختیاری) محتوای فوتر مودال (معمولاً دکمه‌ها)
     */
    footer?: ReactNode;
}
/**
 * Modal یک دیالوگ شناور برای نمایش اطلاعات مهم یا درخواست تایید از کاربر است.
 */
export declare const Modal: React.FC<ModalProps>;
