"use client";

import React from "react";
import { FiDownload } from "react-icons/fi";

export interface ExportButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * متنی که روی دکمه نمایش داده می‌شود
   * @default 'خروجی اکسل'
   */
  text?: string;
  /**
   * آیا دکمه در حالت لودینگ است؟
   */
  isLoading?: boolean;
}

/**
 * ExportButton یک دکمه استاندارد برای عملیات خروجی گرفتن (مانند اکسل) است.
 */
export const ExportButton: React.FC<ExportButtonProps> = ({
  text = 'خروجی اکسل',
  isLoading = false,
  ...props
}) => {
  return (
    <button
      className="export-button"
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="export-button__loader"></span>
      ) : (
        <FiDownload />
      )}
      <span>{isLoading ? 'در حال آماده‌سازی...' : text}</span>
    </button>
  );
};