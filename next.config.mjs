/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // 👈 Important: enables static export for GitHub Pages
  basePath: '/PORTFOLIO_PROD', // 👈 change this to your repo name
  assetPrefix: '/PORTFOLIO_PROD/', // 👈 same repo name
}

export default nextConfig
