"use client";
import React, { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ۱. وارد کردن تمام کامپوننت‌ها و تایپ‌های مورد نیاز از سیستم طراحی
import { 
  Sidebar, 
  SidebarMenuItem,
  type SidebarNavItem 
} from "@my-ds/design-system"; 

// ۲. آیکون‌ها و کامپوننت‌های محلی (مختص این اپلیکیشن)
import {
  FaCog,
  FaTimes,
  FaShieldAlt,
  FaStore,
  FaTicketAlt,
  FaBox,
  FaFlag,
  FaListAlt,
  FaAward,
  FaComments,
  FaSitemap,
  FaGavel,
  FaImages,
  FaVideo,
  FaLayerGroup,
  FaClipboardList,
  FaQuestionCircle,
} from "react-icons/fa";
import SidebarPinButton from "./SidebarPinButton";

// ۳. داده‌های منو (این داده‌ها مختص اپلیکیشن admin-panel هستند)
const menuItems: SidebarNavItem[] = [
    {
        label: "فروشگاه‌ها",
        icon: FaStore,
        submenu: [
          { href: "/pages/Shops", label: "لیست فروشگاه‌ها", icon: FaListAlt },
          { href: "/pages/Shops/Badges", label: "بج ها", icon: FaAward },
          { href: "/pages/Shops/Comments", label: "کامنت ها", icon: FaComments },
          {
            href: "/pages/Shops/ShopCategory",
            label: "دسته بندی فروشندگان",
            icon: FaSitemap,
          },
          {
            href: "/pages/Shops/ConfirmRule",
            label: "قوانین تایید فروشگاه",
            icon: FaGavel,
          },
          {
            href: "/pages/Shops/Images",
            label: "عکس های ارسالی",
            icon: FaImages,
          },
          {
            href: "/pages/Shops/Videos",
            label: "ویدیو های ارسالی",
            icon: FaVideo,
          },
          {
            label: "گزارش‌ها",
            icon: FaFlag,
            submenu: [
              {
                href: "/pages/Shops/Report/ReportType",
                label: "انواع گزارش",
                icon: FaLayerGroup,
              },
              {
                href: "/pages/Shops/Report/Reports",
                label: "گزارش ها",
                icon: FaFlag,
              },
              {
                href: "/pages/Shops/Report/ReportSubjects",
                label: "موضوعات گزارش ها",
                icon: FaClipboardList,
              },
            ],
          },
        ],
        
      },
      {
        label: "تیکت‌ها",
        icon: FaTicketAlt,
        submenu: [{ href: "/pages/Tickets", label: "لیست تیکت‌ها", icon: FaListAlt }],
      },
     
      {
     label: "بانک",
        icon: FaStore,
        submenu: [
          { href: "/pages/Bank/Banks", label: "لیست بانک ها", icon: FaListAlt },
          { href: "/pages/Bank/Banks", label: "ارز ها", icon: FaListAlt },
        ],
      },
      {
        label: "سوالات متداول",
        icon: FaQuestionCircle,
        submenu: [
          { href: "/pages/FAQ", label: "مدیریت سوالات متداول", icon: FaQuestionCircle },
        ]
      }
];
const footerItems: SidebarNavItem[] = [
    { href: "/settings", label: "تنظیمات", icon: FaCog }
];


// کامپوننت اصلی و هوشمند Sidebar در اپلیکیشن
const AppSidebar = ({ isSidebarOpenForMobile, onCloseMobile }: { isSidebarOpenForMobile: boolean, onCloseMobile: () => void }) => {
  const pathname = usePathname();
  const [isPinned, setIsPinned] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  // State برای حل مشکل Hydration Mismatch
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const isDesktopExpanded = isPinned || isHovering;
  const shouldBeFullyOpen = isSidebarOpenForMobile || isDesktopExpanded;
  
  // تابع render prop برای مدیریت لینک‌دهی با Next.js
  const renderNextLink = (href: string, children: ReactNode) => {
    // استفاده از روش مدرن Link بدون تگ <a> و legacyBehavior
    return <Link href={href}>{children}</Link>;
  };

  return (
    <>
      {/* Overlay برای بستن منوی موبایل با کلیک در بیرون */}
      {isSidebarOpenForMobile && (
        <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={onCloseMobile}></div>
      )}

      {/* Wrapper برای مدیریت هاور و موقعیت‌یابی */}
      <div
        onMouseEnter={() => isClient && window.innerWidth > 768 && setIsHovering(true)}
        onMouseLeave={() => isClient && window.innerWidth > 768 && setIsHovering(false)}
        className={`fixed right-0 top-0 bottom-0 md:relative z-40 transition-transform duration-300 ease-in-out 
                    ${isSidebarOpenForMobile ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}
      >
        {/* دکمه پین کردن (فقط در دسکتاپ و حالت هاور) */}
        {isClient && (
          <div className={`hidden md:block transition-opacity duration-200 ${isHovering ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <SidebarPinButton isPinned={isPinned} onClick={() => setIsPinned(!isPinned)} />
          </div>
        )}

        {/* دکمه بستن (فقط در موبایل) */}
        {isSidebarOpenForMobile && (
             <button onClick={onCloseMobile} aria-label="بستن منو" className="absolute top-4 left-4 md:hidden p-1 z-[41] text-slate-500 dark:text-slate-300">
                <FaTimes size={22} />
             </button>
        )}

        {/* ۴. استفاده از کامپوننت Sidebar از design-system و پاس دادن props */}
        <Sidebar
          appName="پنل مدیریت"
          logo={<FaShieldAlt />}
          menuItems={menuItems}
          footerItems={footerItems}
          currentPath={pathname}
          isExpanded={shouldBeFullyOpen}
          renderLink={renderNextLink}
        />
      </div>
    </>
  );
};

export default AppSidebar;