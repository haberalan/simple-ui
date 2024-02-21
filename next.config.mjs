/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: {
        loader: "@svgr/webpack",
        options: {
          dimensions: false,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
