import { jsx as _jsx } from "react/jsx-runtime";
import { Header } from "./Header";
import { Label } from "../../atoms/Label/Label";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
const meta = {
    title: "Molecules/Header",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        title: { control: "text" },
        showBackButton: { control: "boolean" },
        showNotificationButton: { control: "boolean" },
        showThemeSwitch: { control: "boolean" },
    },
};
export default meta;
// ۲. به صورت صریح تایپ آرایه را مشخص می‌کنیم
const profileItems = [
    {
        label: { text: "مشاهده پروفایل", size: "sm" }, // TypeScript حالا می‌داند که size باید از نوع LabelSize باشد
        icon: _jsx(FaUser, {}),
        onClick: () => alert("Profile!")
    },
    {
        label: { text: "خروج", size: "sm", variant: "error" }, // و variant باید از نوع LabelVariant باشد
        icon: _jsx(FiLogOut, {}),
        onClick: () => alert("Logout!")
    },
];
export const DefaultDesktop = {
    name: "Default (Desktop)",
    args: {
        title: _jsx(Label, { text: "\u062F\u0627\u0634\u0628\u0648\u0631\u062F", size: "lg" }),
        showBackButton: true,
        showNotificationButton: true,
        showThemeSwitch: true,
        avatarDropdownItems: profileItems,
        userAvatar: { src: "https://i.pravatar.cc/150?u=a042581f4e29026704d", alt: "User" },
    },
};
export const MobileView = {
    name: "Mobile View (با دکمه منو)",
    args: {
        ...DefaultDesktop.args,
        onMenuButtonClick: () => alert("Menu Button Clicked!"),
    },
    parameters: {
        viewport: {
            defaultViewport: "mobile1",
        },
    },
};
export const LTRView = {
    name: "Left-to-Right (LTR)",
    args: {
        ...DefaultDesktop.args,
        title: _jsx(Label, { text: "Dashboard", size: "lg" }),
    },
};
export const Minimal = {
    name: "Minimal (فقط عنوان)",
    args: {
        title: _jsx(Label, { text: "\u062A\u0646\u0638\u06CC\u0645\u0627\u062A", size: "lg" }),
        showBackButton: false,
        showNotificationButton: false,
        showThemeSwitch: false,
    },
};
