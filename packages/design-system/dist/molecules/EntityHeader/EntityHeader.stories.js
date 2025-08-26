import { jsx as _jsx } from "react/jsx-runtime";
import { EntityHeader } from "./EntityHeader";
import { Badge } from "../../atoms/Badge/Badge";
import { FaBan } from "react-icons/fa";
const meta = {
    title: "Molecules/EntityHeader",
    component: EntityHeader,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    name: "Default",
    args: {
        title: "فروشگاه بزرگ یدکچی مرکزی",
        avatarSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        children: _jsx(Badge, { label: "\u062A\u0627\u06CC\u06CC\u062F \u0634\u062F\u0647", variant: "success" }),
    },
};
export const WithFallbackAvatar = {
    name: "With Fallback Avatar",
    args: {
        title: "فروشگاه بدون لوگو",
        avatarFallback: "ف", // نمایش حرف اول
        children: _jsx(Badge, { label: "\u062F\u0631 \u062D\u0627\u0644 \u0628\u0631\u0631\u0633\u06CC", variant: "warning" }),
    },
};
export const BannedStatus = {
    name: "Banned Status",
    args: {
        title: "فروشگاه متخلف",
        children: _jsx(Badge, { label: "\u0645\u0633\u062F\u0648\u062F", variant: "danger", icon: _jsx(FaBan, {}) }),
    },
};
