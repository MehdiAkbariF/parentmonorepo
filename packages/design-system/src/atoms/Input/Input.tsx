import React from 'react';
import { Label } from '../Label';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, className, ...props }) => {
  return (
    <div className="input__container">
      {/* ✨ این کد حالا بدون خطا کار می‌کند */}
      {label && (
        <Label
          // ما به Label می‌گوییم که خودش را به عنوان تگ <label> رندر کند
          as="label" 
          htmlFor={id} 
          text={label} 
          size="sm" 
          variant="secondary" 
          className="input__label"
        />
      )}
      <input id={id} className={`input ${className || ''}`} {...props} />
    </div>
  );
};