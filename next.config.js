/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // assetPrefix: '.', 이거 활성화하면 /greeting에서 새로고침 시 css 깨짐.
  // distDir: 'build'
}
module.exports = nextConfig

