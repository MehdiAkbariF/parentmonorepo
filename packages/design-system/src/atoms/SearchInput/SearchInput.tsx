"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * آیا کادر جستجو در حالت لودینگ است؟
   * (مثلاً زمانی که منتظر پاسخ جستجو از سرور هستیم)
   */
  isLoading?: boolean;
}

/**
 * SearchInput یک کامپوننت استاندارد برای دریافت ورودی جستجو از کاربر است.
 */
export const SearchInput: React.FC<SearchInputProps> = ({ isLoading = false, ...props }) => {
  return (
    <div className={`search-input__wrapper ${isLoading ? 'search-input__wrapper--loading' : ''}`}>
      <input
        type="search"
        className="search-input"
        disabled={isLoading}
        {...props}
      />
      <span className="search-input__icon">
        {isLoading ? (
          <span className="search-input__loader"></span>
        ) : (
          <FiSearch />
        )}
      </span>
    </div>
  );
};