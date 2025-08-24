"use client";
import { jsx as _jsx } from "react/jsx-runtime";
export const FilterTabs = ({ tabs, activeTab, onTabChange }) => {
    return (_jsx("div", { className: "filter-tabs", children: tabs.map(tab => (_jsx("button", { className: `filter-tabs__button ${activeTab === tab.id ? 'filter-tabs__button--active' : ''}`, onClick: () => onTabChange(tab.id), children: tab.label }, tab.id))) }));
};
