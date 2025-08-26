import React, { ReactNode } from "react";
import { Card } from "../../atoms/Card/Card";
import { KeyValueDisplay } from "../../atoms/KeyValueDisplay/KeyValueDisplay";
import { Label } from "../../atoms/Label/Label";

// تعریف ساختار هر آیتم اطلاعاتی
export interface InfoCardItem {
  label: string;
  value: ReactNode;
}

// پراپرتی‌های کامپوننت InfoCard
export interface InfoCardProps {
  /**
   * عنوان کارت اطلاعاتی
   */
  title: string;
  /**
   * (اختیاری) آرایه‌ای از آیتم‌های کلید-مقدار برای نمایش در گرید.
   * اگر children ارائه شود، این پراپرتی نادیده گرفته می‌شود.
   */
  items?: InfoCardItem[];
  /**
   * (اختیاری) محتوای سفارشی که به جای گرید آیتم‌ها نمایش داده می‌شود.
   */
  children?: ReactNode;
  /**
   * (اختیاری) کلاس‌های CSS اضافی
   */
  className?: string;
}

/**
 * InfoCard یک مولکول برای نمایش مجموعه‌ای از اطلاعات مرتبط
 * در یک کارت با چیدمان گرید یا محتوای سفارشی است.
 */
export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  items,
  children,
  className,
}) => {
  return (
    <Card className={`info-card ${className || ''}`}>
      <Label as="h2" text={title} size="lg" className="info-card__title" />

      {/* 
        منطق رندر شرطی:
        اولویت با children است. اگر وجود داشت، آن را رندر کن.
        در غیر این صورت، اگر items وجود داشت، گرید را رندر کن.
      */}
      {children ? (
        children
      ) : items ? (
        <dl className="info-card__grid">
          {items.map((item, index) =>
            // فقط آیتم‌هایی را رندر می‌کنیم که مقدار دارند
            item.value ? (
              <KeyValueDisplay key={index} label={item.label}>
                {item.value}
              </KeyValueDisplay>
            ) : null
          )}
        </dl>
      ) : null}
    </Card>
  );
};