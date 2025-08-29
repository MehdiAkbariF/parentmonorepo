"use client";

import React, { ReactNode } from "react";
import { Modal, ModalProps } from "../Modal/Modal";
import { Button, ButtonProps } from "../../atoms/Button/Button";

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
export const FormModal: React.FC<FormModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  confirmText = "ذخیره تغییرات",
  cancelText = "انصراف",
  onConfirm,
  isLoading = false,
  confirmButtonVariant = 'primary',
}) => {
  // ما فوتر را به صورت داخلی و استاندارد می‌سازیم
  const footerContent = (
    <>
      <Button variant="secondary" onClick={onClose} disabled={isLoading}>
        {cancelText}
      </Button>
      <Button variant={confirmButtonVariant} onClick={onConfirm} isLoading={isLoading}>
        {confirmText}
      </Button>
    </>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      footer={footerContent}
    >
      {/* ما فرزندان را داخل یک div با کلاس مشخص قرار می‌دهیم */}
      <div className="form-modal__body">
        {children}
      </div>
    </Modal>
  );
};