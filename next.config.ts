import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/2021-in-memory',
        destination: '/resources/articles/2021-in-memory',
        permanent: true,
      },
      {
        source: '/2022-in-memory',
        destination: '/resources/articles/2022-in-memory',
        permanent: true,
      },
      {
        source: '/2023-in-memory',
        destination: '/resources/articles/2023-in-memory',
        permanent: true,
      },
      {
        source: '/2024-in-memory',
        destination: '/resources/articles/2024-in-memory',
        permanent: true,
      },
    ]
  },
}

export default nextConfig;
