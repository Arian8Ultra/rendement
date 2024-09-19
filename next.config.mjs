/** @type {import('next').NextConfig} */
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin'

const nextConfig = {
  webpack(config,{isServer}) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()]
    }
    return config;
  },
};

// if (process.env.NODE_ENV === "production") {
//   nextConfig.assetPrefix = "https://rendement.liara.run/";
// }

export default nextConfig;
