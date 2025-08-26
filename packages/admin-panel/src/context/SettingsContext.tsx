"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// ۱. تعریف تمام تایپ‌های مورد نیاز برای وضوح بیشتر
type Theme = 'light' | 'dark';
type Direction = 'rtl' | 'ltr';

// اینترفیس برای مقادیری که Context فراهم می‌کند
export interface SettingsContextType {
  theme: Theme;
  direction: Direction;
  isSidebarPinned: boolean;
  isMobileMenuOpen: boolean;
  toggleTheme: () => void;
  toggleDirection: () => void;
  toggleSidebarPin: () => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
}

// ۲. ایجاد Context با مقدار اولیه null (برای بررسی اینکه آیا Provider وجود دارد)
const SettingsContext = createContext<SettingsContextType | null>(null);

/**
 * Provider کامپوننتی است که تمام State ها و توابع را نگه می‌دارد
 * و آن‌ها را در اختیار تمام فرزندان خود قرار می‌دهد.
 */
export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  // ۳. تمام State های سراسری UI در اینجا تعریف می‌شوند
  const [theme, setTheme] = useState<Theme>('light');
  const [direction, setDirection] = useState<Direction>('rtl');
  const [isSidebarPinned, setIsSidebarPinned] = useState(true); // پیش‌فرض پین شده
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ۴. تعریف توابع (Actions) برای تغییر State ها
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const toggleDirection = () => setDirection(prev => (prev === 'rtl' ? 'ltr' : 'rtl'));
  const toggleSidebarPin = () => setIsSidebarPinned(prev => !prev);
  const openMobileMenu = () => setMobileMenuOpen(true);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // ۵. افکت‌های جانبی برای اعمال تغییرات به DOM
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = direction === 'rtl' ? 'fa' : 'en';
  }, [direction]);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);
  
  // ۶. آماده‌سازی مقداری که به تمام کامپوننت‌ها داده می‌شود
  const value = {
    theme,
    direction,
    isSidebarPinned,
    isMobileMenuOpen,
    toggleTheme,
    toggleDirection,
    toggleSidebarPin,
    openMobileMenu,
    closeMobileMenu,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

/**
 * یک هوک سفارشی برای استفاده آسان و ایمن از Context.
 * این هوک تضمین می‌کند که شما فقط در جایی که Provider وجود دارد، از Context استفاده می‌کنید.
 */
export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === null) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};