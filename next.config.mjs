/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  i18n: {
    locales: ['hu', 'ro'],
    defaultLocale: 'hu',
    localeDetection: true
  }
};
export default nextConfig;
