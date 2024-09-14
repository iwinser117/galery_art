/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['http.cat', 'images.unsplash.com'],
        remotePatterns: [
            {
              hostname: 'images.unsplash.com', 
            },
          ],
    },
};

export default nextConfig;
