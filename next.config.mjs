/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ hostname: "https://mrchefe.com.br" }],
  },
};

export default nextConfig;
