"use client";

import React from "react";
import { IconButton } from "../../atoms/IconButton";
// ما به آیکون‌های استاندارد برای این عملیات نیاز داریم
import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

export interface ActionButtonsProps {
  /**
   * تابعی که با کلیک روی دکمه "مشاهده" اجرا می‌شود.
   * اگر این prop ارائه نشود، دکمه نمایش داده نمی‌شود.
   */
  onView?: () => void;
  /**
   * تابعی که با کلیک روی دکمه "ویرایش" اجرا می‌شود.
   * اگر این prop ارائه نشود، دکمه نمایش داده نمی‌شود.
   */
  onEdit?: () => void;
  /**
   * تابعی که با کلیک روی دکمه "حذف" اجرا می‌شود.
   * اگر این prop ارائه نشود، دکمه نمایش داده نمی‌شود.
   */
  onDelete?: () => void;
  /**
   * سایز دکمه‌ها
   * @default 'sm'
   */
  size?: "sm" | "md";
}

/**
 * ActionButtons مجموعه‌ای از دکمه‌های عملیاتی استاندارد (مشاهده، ویرایش، حذف)
 * برای استفاده در جداول یا لیست‌ها است.
 */
export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onView,
  onEdit,
  onDelete,
  size = "sm",
}) => {
  return (
    <div className="action-buttons">
      {onView && (
        <IconButton
          icon={<FiEye />}
          size={size}
          variant="default"
          onClick={onView}
          aria-label="مشاهده"
        />
      )}
      {onEdit && (
        <IconButton
          icon={<FiEdit2 />}
          size={size}
          variant="default"
          onClick={onEdit}
          aria-label="ویرایش"
        />
      )}
      {onDelete && (
        <IconButton
          icon={<FiTrash2 />}
          size={size}
          variant="danger" // دکمه حذف برای جلب توجه، واریانت danger دارد
          onClick={onDelete}
          aria-label="حذف"
        />
      )}
    </div>
  );
};