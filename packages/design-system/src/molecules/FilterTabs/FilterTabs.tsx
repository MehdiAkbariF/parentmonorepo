"use client";
import React from 'react';

export interface FilterTab {
  id: string; // یک شناسه منحصر به فرد مانند 'newest', 'oldest'
  label: string; // متنی که نمایش داده می‌شود
}

export interface FilterTabsProps {
  tabs: FilterTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="filter-tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`filter-tabs__button ${activeTab === tab.id ? 'filter-tabs__button--active' : ''}`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};