/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
module.exports = {
  reactStrictMode: true,
  serverOptions: {
    host: '192.168.1.149'
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    });
    return config;
  },

};