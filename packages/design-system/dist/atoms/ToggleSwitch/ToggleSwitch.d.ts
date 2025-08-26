import React from 'react';
export interface ToggleSwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
    label: string;
    enabled: boolean;
    onChange: (enabled: boolean) => void;
}
export declare const ToggleSwitch: React.FC<ToggleSwitchProps>;
