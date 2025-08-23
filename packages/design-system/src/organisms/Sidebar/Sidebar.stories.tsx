import React, { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar, SidebarNavItem } from "./Sidebar";
import { FaCog, FaStore, FaListAlt } from 'react-icons/fa';

// کامپوننت کمکی برای مدیریت state در استوری‌بوک
const SidebarWithState = (args: any) => {
    const [isPinned, setIsPinned] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    
    // در استوری، هاور را با یک دکمه شبیه‌سازی می‌کنیم
    const isExpanded = isPinned || isHovering;

    const renderLink = (href: string, children: React.ReactNode) => (
        <a href={href} onClick={(e) => e.preventDefault()} style={{ textDecoration: 'none' }}>
            {children}
        </a>
    );
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start' }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => setIsPinned(p => !p)}>
                    Toggle Pin ({isPinned ? "Pinned" : "Unpinned"})
                </button>
                <button onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                    Hover Me
                </button>
            </div>
            <div style={{ height: '80vh' }}>
                <Sidebar 
                    {...args}
                    isExpanded={isExpanded}
                    isPinned={isPinned}
                    onPinToggle={() => setIsPinned(p => !p)}
                    renderLink={renderLink}
                />
            </div>
        </div>
    );
};


const meta: Meta<typeof Sidebar> = {
  title: "Organisms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  render: (args) => <SidebarWithState {...args} />,
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const sampleMenuItems: SidebarNavItem[] = [
    { label: "فروشگاه‌ها", icon: FaStore, submenu: [ { href: "/shops", label: "لیست فروشگاه‌ها", icon: FaListAlt } ] },
    { label: "تیکت‌ها", icon: FaListAlt, href: "/tickets" },
];
const sampleFooterItems: SidebarNavItem[] = [
    { label: "تنظیمات", icon: FaCog, href: "/settings" }
];

export const Default: Story = {
  args: {
    appName: "پنل مدیریت",
    logo: <FaStore />,
    menuItems: sampleMenuItems,
    footerItems: sampleFooterItems,
    currentPath: "/",
  },
};

export const ActiveSubmenu: Story = {
    args: {
        ...Default.args,
        currentPath: "/shops", // مسیر فعال را تغییر می‌دهیم
    },
};