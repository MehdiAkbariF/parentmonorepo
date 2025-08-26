"use client";

import React from 'react';
import { Card } from '../../atoms/Card/Card';
import { Label } from '../../atoms/Label/Label';
import { Button } from '../../atoms/Button/Button';
import { Badge, BadgeVariant } from '../../atoms/Badge/Badge';
import { FiCheck, FiX, FiExternalLink } from 'react-icons/fi';

export interface ApprovalCardProps {
  /**
   * عنوان مدرک (مثلاً "کارت ملی")
   */
  title: string;
  /**
   * آیا این مدرک از قبل تایید شده است؟ (از API می‌آید)
   */
  isConfirmed: boolean;
  /**
   * (اختیاری) توضیحات ادمین در مورد وضعیت. 
   * ما از وجود این متن برای تشخیص حالت "رد شده" استفاده می‌کنیم.
   */
  rejectionDescription?: string | null;
  /**
   * (اختیاری) لینک به فایل مدرک برای مشاهده
   */
  documentUrl?: string | null;
  /**
   * تابعی که با کلیک روی دکمه "تایید" فراخوانی می‌شود
   */
  onApprove: () => void;
  /**
   * تابعی که با کلیک روی دکمه "رد" فراخوانی می‌شود
   */
  onReject: () => void;
  /**
   * آیا کامپوننت در حالت لودینگ است؟
   */
  isLoading?: boolean;
}

/**
 * ApprovalCard یک مولکول برای نمایش وضعیت تایید یک مدرک و انجام عملیات روی آن است.
 */
export const ApprovalCard: React.FC<ApprovalCardProps> = ({
  title,
  isConfirmed,
  rejectionDescription,
  documentUrl,
  onApprove,
  onReject,
  isLoading = false,
}) => {

  // منطق هوشمند برای تعیین وضعیت
  const getStatus = (): { label: string; variant: BadgeVariant } => {
    if (isConfirmed) {
      return { label: "تایید شده", variant: "success" };
    }
    // اگر تایید نشده، اما توضیحات رد وجود دارد، پس "رد شده" است
    if (rejectionDescription) {
      return { label: "رد شده", variant: "danger" };
    }
    // در غیر این صورت، "در انتظار بررسی" است
    return { label: "در انتظار بررسی", variant: "warning" };
  };

  const status = getStatus();
  // دکمه‌ها فقط در حالت "در انتظار بررسی" نمایش داده می‌شوند
  const showActionButtons = status.variant === 'warning';

  return (
    <Card className="approval-card">
      <div className="approval-card__main">
        <Label text={title} size="md" />
        <Badge 
          label={status.label}
          variant={status.variant}
        />
      </div>
      <div className="approval-card__actions">
        {documentUrl && (
          <a href={`https://api.yadakchi.com${documentUrl}`} target="_blank" rel="noreferrer">
            <Button variant="ghost">
              <FiExternalLink /> مشاهده
            </Button>
          </a>
        )}
        {showActionButtons && (
          <>
            <Button variant="secondary" onClick={onReject} isLoading={isLoading}>
              <FiX /> رد
            </Button>
            <Button variant="primary" onClick={onApprove} isLoading={isLoading}>
              <FiCheck /> تایید
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};