/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {    
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "res.cloudinary.com",
            port: "",
          },
          {
            protocol: "http",
            hostname: "localhost",
            port: "3000",
          },
          {
            protocol: "https",
            hostname: "pbs.twimg.com",
            port: "",
          },
        ],
      },    
    }
    
    module.exports = nextConfig
    