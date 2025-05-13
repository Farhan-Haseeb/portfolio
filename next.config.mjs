/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: "build",
  images: { unoptimized: true },
  env: {
    MAILER_API: process.env.MAILER_API,
  },
};

export default nextConfig;
