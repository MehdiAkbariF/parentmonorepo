"use client";

import React, { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom"; // ۱. ایمپورت برای Portals
import { Label } from "../../atoms/Label";
import { IconButton } from "../../atoms/IconButton";
import { FiX } from "react-icons/fi";

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
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  // ۲. افکت برای جلوگیری از اسکرول صفحه در پس‌زمینه
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // با unmount شدن کامپوننت، اسکرول را برمی‌گردانیم
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  // ۳. افکت برای بستن مودال با کلید Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // اگر مودال باز نیست، چیزی رندر نکن
  if (!isOpen) return null;

  // ۴. استفاده از Portal برای رندر کردن مودال در بالای تمام عناصر دیگر
  return ReactDOM.createPortal(
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <Label as="h2" text={title} size="lg" />
          <IconButton icon={<FiX />} variant="danger" onClick={onClose} aria-label="بستن مودال" />
        </div>
        <div className="modal__body">
          {children}
        </div>
        {footer && (
          <div className="modal__footer">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body // مودال به انتهای body متصل می‌شود
  );
};