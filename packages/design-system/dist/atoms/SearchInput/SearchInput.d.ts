import React from "react";
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
export declare const SearchInput: React.FC<SearchInputProps>;
