import { ReactNode } from "react";
import "./Card.scss";
import { LabelVariant, LabelSize } from "../Label";
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
export declare const Card: ({ children, items, shopLogo, shopTitle, shopStatus, shopStatusVariant, padding, shadow, className, }: CardProps) => import("react/jsx-runtime").JSX.Element;
