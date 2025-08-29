/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'api.yadakchi.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
  },
  
  async rewrites() {
    // ۱. ✨ یک مقدار پیش‌فرض برای baseUrl تعریف می‌کنیم
    const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:5000';
    console.log(`Rewriting API calls to: ${apiBaseUrl}`); // ۲. ✨ یک لاگ برای عیب‌یابی اضافه می‌کنیم

    return [
      {
        source: '/api/:path*',
        // ۳. ✨ از متغیر محلی با مقدار پیش‌فرض استفاده می‌کنیم
        destination: `${apiBaseUrl}/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig