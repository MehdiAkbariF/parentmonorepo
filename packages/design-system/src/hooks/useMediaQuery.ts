"use client";

import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    // مقدار اولیه را تنظیم می‌کنیم
    setMatches(mediaQuery.matches);

    // به تغییرات گوش می‌دهیم
    mediaQuery.addEventListener('change', handler);

    // در زمان unmount، شنونده را حذف می‌کنیم
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};