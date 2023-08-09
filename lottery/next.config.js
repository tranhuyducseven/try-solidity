/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

const nextConfig = nextTranslate({
  reactStrictMode: false,
  swcMinify: true,
  output: "standalone",
  publicRuntimeConfig: {
    INFURA_API_KEY: process.env.INFURA_API_KEY || "UNKNOWN",
    MNEMONIC: process.env.MNEMONIC ,
  },
});

module.exports = nextConfig;
