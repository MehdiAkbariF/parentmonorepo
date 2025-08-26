import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from '../../atoms/Card/Card';
import { Avatar } from '../../atoms/Avatar';
import { Label } from '../../atoms/Label';
import { Badge } from '../../atoms/Badge/Badge';
import { KeyValueDisplay } from '../../atoms/KeyValueDisplay/KeyValueDisplay';
/**
 * ShopDetailsCard یک کامپوننت برای نمایش اطلاعات خلاصه یک فروشگاه در یک کارت است.
 */
export const ShopDetailsCard = ({ shopLogo, shopTitle, shopStatus, shopStatusVariant = 'neutral', items, }) => {
    return (_jsxs(Card, { className: "shop-details-card", children: [_jsxs("header", { className: "shop-details-card__header", children: [_jsx(Avatar, { src: shopLogo ? `https://api.yadakchi.com${shopLogo}` : undefined, fallback: shopTitle.charAt(0), size: "lg" }), _jsxs("div", { className: "shop-details-card__title-group", children: [_jsx(Label, { as: "h2", text: shopTitle, size: "xl" }), _jsx(Badge, { label: shopStatus, variant: shopStatusVariant })] })] }), _jsx("div", { className: "shop-details-card__body", children: items.map((item, index) => (_jsx(KeyValueDisplay, { label: item.title, children: item.value }, index))) })] }));
};
