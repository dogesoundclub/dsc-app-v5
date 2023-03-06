/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // assetPrefix: (process.env.NODE_ENV === "production") ? `/${repository}` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
}

// module.exports = nextConfig

const _clientId = process.env.DISCORD_CLIENT_ID
const _clientSecret = process.env.DISCORD_CLIENT_SECRET

module.exports = {
  env : {
      DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
      DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
      NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL
  },
  nextConfig
}

