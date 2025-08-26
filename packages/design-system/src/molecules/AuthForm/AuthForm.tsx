import React, { ReactNode } from 'react';
import { Card } from '../../atoms/Card/Card';
import { Label } from '../../atoms/Label';

export interface AuthFormProps {
  title: string;
  description: string;
  children: ReactNode; // خود فرم در اینجا قرار می‌گیرد
  error?: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({ title, description, children, error }) => {
  return (
    <div className="auth-form__page">
      <Card className="auth-form__card">
        <div className="auth-form__header">
          <Label as="h1" text={title} size="2x" />
          <p className="auth-form__description">{description}</p>
        </div>
        {children}
        {error && <p className="auth-form__error">{error}</p>}
      </Card>
    </div>
  );
};