// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portfolio-images.cellar-c2.services.clever-cloud.com',
        port: '',
        pathname: '/**', // Mengizinkan semua path gambar di dalam bucket ini
      },
    ],
  },
};

export default nextConfig;