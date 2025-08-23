import React, { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { AdminPageLayout } from "./AdminPageLayout";

// --- داده‌های نمونه برای props ها ---
import { FaShieldAlt, FaUser, FaCog, FaStore } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Label } from '../../atoms/Label/Label';

const sampleMenuItems = [
    { label: "داشبورد", icon: FaStore, href: "/" },
    // ...
];
const sampleFooterItems = [
    { label: "تنظیمات", icon: FaCog, href: "/settings" }
];
const sampleProfileItems = [
    { label: { text: "پروفایل" }, icon: <FaUser /> },
    { label: { text: "خروج", variant: "error" }, icon: <FiLogOut /> },
];

// کامپوننت کمکی برای مدیریت state در استوری‌بوک
const LayoutWithState = (args: any) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isPinned, setIsPinned] = useState(false);

    const sidebarProps = {
        appName: "پنل مدیریت",
        logo: <FaShieldAlt />,
        menuItems: sampleMenuItems,
        footerItems: sampleFooterItems,
        currentPath: "/",
        renderLink: (href: string, children: React.ReactNode) => <a href={href}>{children}</a>,
        isPinned: isPinned,
        onPinToggle: () => setIsPinned(prev => !prev),
    };

    const headerProps = {
        title: <Label text="داشبورد" size="lg" />,
        showThemeSwitch: true,
        showNotificationButton: true,
        avatarDropdownItems: sampleProfileItems,
        userAvatar: { src: "https://i.pravatar.cc/150", alt: "User" },
        onMenuButtonClick: () => setMobileMenuOpen(true),
    };
    
    return (
        <AdminPageLayout
            {...args}
            isMobileMenuOpen={isMobileMenuOpen}
            isSidebarPinned={isPinned}
            onMobileMenuClose={() => setMobileMenuOpen(false)}
            sidebarProps={sidebarProps}
            headerProps={headerProps}
        >
            <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.05)', borderRadius: '8px' }}>
                <h1>محتوای اصلی صفحه</h1>
                <p>این بخش محتوای اصلی صفحه است که در لی‌آوت قرار می‌گیرد.</p>
            </div>
        </AdminPageLayout>
    );
};


const meta: Meta<typeof AdminPageLayout> = {
  title: "Templates/AdminPageLayout",
  component: AdminPageLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  // ما خود کامپوننت را رندر نمی‌کنیم، بلکه wrapper آن را رندر می‌کنیم
  render: (args) => <LayoutWithState {...args} />,
};

export default meta;
type Story = StoryObj<typeof AdminPageLayout>;

export const DefaultRTL: Story = {
  name: "Default (RTL)",
  
};

export const LTR: Story = {
  name: "Left-to-Right (LTR)",
  
};

export const MobileView: Story = {
    name: "Mobile View",
    parameters: {
      viewport: {
        defaultViewport: "mobile1",
      },
    },
  
};