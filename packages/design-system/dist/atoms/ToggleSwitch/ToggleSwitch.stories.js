import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { ToggleSwitch } from "./ToggleSwitch";
const meta = {
    title: "Atoms/ToggleSwitch",
    component: ToggleSwitch,
    tags: ["autodocs"],
};
export default meta;
// استوری تعاملی با استفاده از هوک
export const Interactive = {
    name: "Interactive",
    render: () => {
        const [isEnabled, setIsEnabled] = useState(false);
        return (_jsx(ToggleSwitch, { label: "\u0641\u0639\u0627\u0644 \u0628\u0648\u062F\u0646 \u0641\u0631\u0648\u0634\u06AF\u0627\u0647", enabled: isEnabled, onChange: setIsEnabled }));
    },
};
export const Disabled = {
    args: {
        label: "حالت غیرفعال",
        enabled: false,
        disabled: true,
    },
};
