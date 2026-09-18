import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org", "res.cloudinary.com"], // अन्य domains भी यहाँ जोड़ सकते हैं
  },
  eslint: {
  ignoreDuringBuilds: true,
}
};

export default nextConfig;
