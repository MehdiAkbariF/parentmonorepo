import React, { ReactNode } from 'react';
import { Button } from '../../atoms/Button/Button';
import { FiArrowRight } from 'react-icons/fi'; // یا هر آیکون دیگری

export interface ActionToolbarProps {
  /**
   * (اختیاری) اگر این تابع ارائه شود، دکمه بازگشت نمایش داده می‌شود
   */
  onBackClick?: () => void;
  /**
   * فرزندان این کامپوننت، دکمه‌های اکشن اصلی (مانند مسدودسازی، تایید و ...) هستند
   */
  children?: ReactNode;
}

/**
 * ActionToolbar یک نوار ابزار استاندارد برای نمایش دکمه‌های عملیاتی اصلی یک صفحه است.
 */
export const ActionToolbar: React.FC<ActionToolbarProps> = ({ onBackClick, children }) => {
  return (
    <div className="action-toolbar">
      <div className="action-toolbar__start">
        {onBackClick && (
          <Button variant="ghost" onClick={onBackClick}>
            <FiArrowRight />
            <span>بازگشت</span>
          </Button>
        )}
      </div>
      <div className="action-toolbar__end">
        {/* ✨ --- تغییر کلیدی و نهایی اینجاست --- ✨ */}
        {children}
      </div>
    </div>
  );
};