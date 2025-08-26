"use client";

import { ReactNode } from "react";
import "./Card.scss";
import { Label, LabelVariant, LabelSize } from "../Label";

export interface CardItem {
  title: string;
  value: string;
  valueVariant?: LabelVariant;
  valueSize?: LabelSize;
  icon?: ReactNode;
}

export interface CardProps {
  /** اگر children بدی، کارت محتوای سفارشی نشون میده */
  children?: ReactNode;
  /** اگر items بدی، کارت به صورت خودکار لیبل‌ها رو می‌سازه */
  items?: CardItem[];
  /** هدر فروشگاه */
  shopLogo?: string | null;
  shopTitle?: string;
  shopStatus?: string;
  shopStatusVariant?: LabelVariant;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: boolean;
  className?: string;
}

export const Card = ({
  children,
  items,
  shopLogo,
  shopTitle,
  shopStatus,
  shopStatusVariant = "primary",
  padding = "md",
  shadow = true,
  className = "",
}: CardProps) => {
  return (
    <div
      className={`ds-card ds-card--padding-${padding} ${
        shadow ? "ds-card--shadow" : ""
      } ${className}`}
    >
      {/* هدر فروشگاه */}
      {(shopLogo || shopTitle || shopStatus) && (
        <div className="ds-card__header">
          <div className="ds-card__header-left">
            {shopLogo ? (
              <img
                src={shopLogo}
                alt={shopTitle || "Shop Logo"}
                width={48}
                height={48}
                style={{ borderRadius: "8px", objectFit: "cover" }}
              />
            ) : (
              <div className="ds-card__logo-placeholder">بدون لوگو</div>
            )}
            {shopTitle && <h3 className="ds-card__shop-title">{shopTitle}</h3>}
          </div>
          {shopStatus && (
            <Label
              text={shopStatus}
              variant={shopStatusVariant}
              size="md"
            />
          )}
        </div>
      )}

      {/* بدنه کارت */}
      {items ? (
        <div className="ds-card__items">
          {items.map((item, idx) => (
            <div key={idx} className="ds-card__item">
              <strong className="ds-card__item-title">{item.title}:</strong>
              <Label
                text={item.value}
                variant={item.valueVariant || "primary"}
                size={item.valueSize || "md"}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      ) : (
        children
      )}
    </div>
  );
};
