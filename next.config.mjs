/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["hu", "ro"],
    defaultLocale: "hu",
    // localeDetection-t egyszerűen kivesszük / nem használjuk
  },
};

export default nextConfig;
