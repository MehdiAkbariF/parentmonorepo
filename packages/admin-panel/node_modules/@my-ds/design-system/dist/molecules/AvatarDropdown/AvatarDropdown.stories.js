import { jsx as _jsx } from "react/jsx-runtime";
import { AvatarDropdown } from "./AvatarDropdown"; // نام کامپوننت و آیتم را تغییر می‌دهیم
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
const meta = {
    title: "Molecules/AvatarDropdown", // عنوان استوری را تغییر می‌دهیم
    component: AvatarDropdown,
    decorators: [
        (Story) => (_jsx("div", { style: { padding: '5rem', display: 'flex', justifyContent: 'flex-end' }, children: _jsx(Story, {}) })),
    ],
};
export default meta;
const sampleItems = [
    {
        label: { text: "Profile", size: "sm" },
        icon: _jsx(FiUser, {}),
        onClick: () => alert("Profile clicked"),
    },
    {
        label: { text: "Settings", size: "sm" },
        icon: _jsx(FiSettings, {}),
        onClick: () => alert("Settings clicked"),
    },
    {
        label: { text: "Logout", size: "sm", variant: "error" },
        icon: _jsx(FiLogOut, {}),
        onClick: () => alert("Logout clicked"),
    },
];
export const Default = {
    args: {
        avatar: {
            src: "https://i.pravatar.cc/150?u=raven",
            alt: "User Avatar",
            size: "md",
        },
        items: sampleItems,
        align: "right",
    },
};
