/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
        pathname: '/dr3xzwtag/image/**',
        port:''
      },
    ],
  },
};

export default nextConfig;
// "http://res.cloudinary.com/dr3xzwtag/image/upload/v1788356576/2026-MERN/ldkpvshjss4z2n0piy64.jpg