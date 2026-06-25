import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"
const isVercel = process.env.VERCEL === "1" || !!process.env.VERCEL

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd && !isVercel ? "/VIsual-Python-Dsa" : "",
}

export default nextConfig
