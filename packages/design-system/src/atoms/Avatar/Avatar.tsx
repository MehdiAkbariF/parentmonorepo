import React from "react";


// تعریف پراپرتی‌های کامپوننت Avatar
export interface AvatarProps {
  /**
   * آدرس URL تصویر آواتار
   */
  src?: string;
  /**
   * متن جایگزین برای تصویر (مهم برای دسترسی‌پذیری)
   */
  alt?: string;
  /**
   * سایز آواتار
   */
  size?: "sm" | "md" | "lg";
  /**
   * حرف یا متنی که در صورت نبود تصویر نمایش داده می‌شود
   */
  fallback?: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User Avatar",
  size = "sm",
  fallback,
}) => {
  return (
    <div className={`avatar avatar--${size}`}>
      {src ? (
        <img className="avatar__image" src={src} alt={alt} />
      ) : (
        <span className="avatar__fallback">{fallback}</span>
      )}
    </div>
  );
};