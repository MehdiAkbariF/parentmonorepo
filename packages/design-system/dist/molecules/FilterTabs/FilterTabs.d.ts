import React from 'react';
export interface FilterTab {
    id: string;
    label: string;
}
export interface FilterTabsProps {
    tabs: FilterTab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
}
export declare const FilterTabs: React.FC<FilterTabsProps>;
