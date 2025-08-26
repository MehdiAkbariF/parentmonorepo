"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
// ۱. وارد کردن کامپوننت‌های UI از سیستم طراحی
import { AuthForm, Input, Button, Label } from '@my-ds/design-system'; 
// ۲. وارد کردن کلاینت API
import apiClient from '../../services/apiClient';

export default function LoginPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRequestCode = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); setError('');
        try {
            await apiClient.post('Admin/A_User/Authentication', { body: { phoneNumber, pass: "" } });
            setStep(2);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'خطا در ارسال کد');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyCode = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); setError('');
        try {
            const response = await apiClient.post('Admin/A_User/ConfirmAuthentication', { body: { phoneNumber, code: verificationCode } });
            const { accessToken } = response;
            if (accessToken) {
                Cookies.set('authToken', accessToken, { expires: 7, path: '/' });
                router.push('/');
            } else {
                throw new Error('توکن دریافت نشد');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'کد تایید نامعتبر است');
        } finally {
            setLoading(false);
        }
    };
    
    // ۳. رندر کردن UI با استفاده از کامپوننت‌های جدید
    return (
        <AuthForm
            title={step === 1 ? 'ورود به پنل مدیریت' : 'تایید کد'}
            description={step === 1 ? 'برای ورود، شماره تلفن خود را وارد کنید.' : `کد تایید ارسال شده به شماره ${phoneNumber} را وارد کنید.`}
            error={error}
        >
            {step === 1 ? (
                <form onSubmit={handleRequestCode} className="space-y-6">
                    <Input
                        id="phone"
                        label="شماره تلفن"
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="09123456789"
                        dir="ltr"
                        required
                    />
                    <Button type="submit" isLoading={loading} style={{ width: '100%' }}>
                        ارسال کد تایید
                    </Button>
                </form>
            ) : (
                <form onSubmit={handleVerifyCode} className="space-y-6">
                    <Input
                        id="code"
                        label="کد تایید"
                        type="text"
                        value={verificationCode}
                        onChange={(e) => setVerificationCode(e.target.value)}
                        placeholder="------"
                        dir="ltr"
                        required
                        style={{ textAlign: 'center', fontSize: '1.5rem', letterSpacing: '0.5em' }}
                    />
                    <Button type="submit" isLoading={loading} style={{ width: '100%' }}>
                        ورود و تایید
                    </Button>
                    <Button
                        type="button"
                        variant="ghost"
                        onClick={() => { setStep(1); setError(''); }}
                        style={{ width: '100%' }}
                    >
                        ویرایش شماره تلفن
                    </Button>
                </form>
            )}
        </AuthForm>
    );
};