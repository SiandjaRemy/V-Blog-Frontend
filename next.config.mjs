/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "http",
          hostname: "localhost",
          port: "8000",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "tradepoint-1.s3.amazonaws.com",
          // port: "8000",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  