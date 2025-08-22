"use client";
import { Header, Label, type AvatarDropdownItem } from "@my-ds/design-system";
import { FiUser, FiLogOut } from "react-icons/fi";

export default function HeaderComp() {
  // ✨ متن‌ها فارسی شدند
  const profileItems: AvatarDropdownItem[] = [
    {
      label: { text: "مشاهده پروفایل", size: "lg" },
      icon: <FiUser />,
      onClick: () => alert("رفتن به صفحه پروفایل..."),
    },
    {
      label: { text: "خروج از حساب", size: "lg", variant: "error" },
      icon: <FiLogOut />,
      onClick: () => alert("خارج شدن از حساب..."),
    },
  ];

  return (
    <div>
      <Header
        // ✨ عنوان هدر فارسی شد
        title={<Label text="صفحه اصلی" size="lg" />}
        showThemeSwitch={true}
        showNotificationButton={true}
        avatarDropdownItems={profileItems}
        userAvatar={{
          src: "https://i.pravatar.cc/150?u=raven",
          alt: "آواتار کاربر",
          size: "sm",
        }}
      />
      <main style={{ padding: "1rem" }} className="h-screen">
        <p>محتوای صفحه در اینجا قرار می‌گیرد.</p>
      </main>
    </div>
  );
}