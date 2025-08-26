import React from 'react';
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
export declare const ApprovalCard: React.FC<ApprovalCardProps>;
