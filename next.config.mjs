/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: {
        loader: "svg-url-loader",
        options: {
          dimensions: false,
        },
      },
    });

    return config;
  },
};

export default nextConfig;
