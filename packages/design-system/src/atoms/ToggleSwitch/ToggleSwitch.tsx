"use client";
import React from 'react';

export interface ToggleSwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, enabled, onChange, ...props }) => {
  return (
    <div className="toggle-switch__container">
      <span className="toggle-switch__label">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className={`toggle-switch ${enabled ? 'toggle-switch--enabled' : ''}`}
        {...props}
      >
        <span className="toggle-switch__sr-only">{label}</span>
        <span className="toggle-switch__knob" />
      </button>
    </div>
  );
};