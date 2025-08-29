import React, { ReactNode } from "react";
import { ModalProps } from "../Modal/Modal";
import { ButtonProps } from "../../atoms/Button/Button";
export interface FormModalProps extends Omit<ModalProps, 'footer' | 'children'> {
    /**
     * فرمی که داخل بدنه مودال نمایش داده می‌شود.
     * معمولاً یک تگ <form> با چندین <Input>.
     */
    children: ReactNode;
    /**
     * متنی که روی دکمه تایید نمایش داده می‌شود (مثلاً "ذخیره" یا "افزودن")
     */
    confirmText?: string;
    /**
     * متنی که روی دکمه انصراف نمایش داده می‌شود
     */
    cancelText?: string;
    /**
     * تابعی که با کلیک روی دکمه تایید فراخوانی می‌شود.
     * معمولاً این تابع، onSubmit فرم را صدا می‌زند.
     */
    onConfirm: () => void;
    /**
     * وضعیت لودینگ (معمولاً در هنگام ارسال فرم به سرور)
     */
    isLoading?: boolean;
    /**
     * واریانت دکمه تایید (برای تمایز بین افزودن و ویرایش)
     */
    confirmButtonVariant?: ButtonProps['variant'];
}
/**
 * FormModal یک مودال استاندارد برای نمایش فرم‌های افزودن و ویرایش است.
 */
export declare const FormModal: React.FC<FormModalProps>;
