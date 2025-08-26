import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "../../atoms/Card/Card";
import { KeyValueDisplay } from "../../atoms/KeyValueDisplay/KeyValueDisplay";
import { Label } from "../../atoms/Label/Label";
/**
 * InfoCard یک مولکول برای نمایش مجموعه‌ای از اطلاعات مرتبط
 * در یک کارت با چیدمان گرید یا محتوای سفارشی است.
 */
export const InfoCard = ({ title, items, children, className, }) => {
    return (_jsxs(Card, { className: `info-card ${className || ''}`, children: [_jsx(Label, { as: "h2", text: title, size: "lg", className: "info-card__title" }), children ? (children) : items ? (_jsx("dl", { className: "info-card__grid", children: items.map((item, index) => 
                // فقط آیتم‌هایی را رندر می‌کنیم که مقدار دارند
                item.value ? (_jsx(KeyValueDisplay, { label: item.label, children: item.value }, index)) : null) })) : null] }));
};
