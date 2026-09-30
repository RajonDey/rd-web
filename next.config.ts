import type { NextConfig } from "next";

const CV_DOC_URL =
  "https://docs.google.com/document/d/1_4CDSLUAE8K2_QRXg12bkbvPgIrSY8jzJibTDDiyMJA/preview";
const FRONTEND_CV_DOC_URL =
  "https://docs.google.com/document/d/1FTe6VOEeQ-6YLV0rboZaTrOGnCkynpp_3k8BKYNKu7M/preview";

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
      {
        source: '/cv',
        destination: CV_DOC_URL,
        permanent: false,
      },
      {
        source: '/cv.pdf',
        destination: CV_DOC_URL,
        permanent: false,
      },
      {
        source: '/rajon-dey-software-engineer.pdf',
        destination: CV_DOC_URL,
        permanent: false,
      },
      {
        source: '/cv/frontend',
        destination: FRONTEND_CV_DOC_URL,
        permanent: false,
      },
    ]
  },
}

export default nextConfig;
