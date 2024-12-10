const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withTM = require("next-transpile-modules")([
  "three",
  "@react-three/fiber",
  "@react-three/drei"
]);

const withCSS = require('@zeit/next-css')

module.exports = nextConfig;