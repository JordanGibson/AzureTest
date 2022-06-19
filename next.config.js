/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  images: {
    loader: "imgix",
    path: "https://noop/",
  },
};

module.exports = nextConfig;
