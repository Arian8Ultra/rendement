/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

if (process.env.NODE_ENV === "production") {
  nextConfig.assetPrefix = "https://rendement.liara.run/";
}

export default nextConfig;
