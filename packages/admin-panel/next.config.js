/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // این بخش برای بهینه‌سازی تصاویر است و می‌تواند باقی بماند
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.yadakchi.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  
  // این بخش اصلی برای حل مشکل CORS است
  async rewrites() {
    return [
      {
        // هر درخواستی که به /api/ در پروژه شما ارسال شود...
        source: '/api/:path*',
        // ...به آدرس API اصلی شما هدایت (پروکسی) می‌شود.
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/:path*`,
      },
      // شما می‌توانید قوانین دیگری نیز در اینجا اضافه کنید
    ]
  },
}

module.exports = nextConfig