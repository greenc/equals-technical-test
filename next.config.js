/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_BASE_URL: 'https://61c32f169cfb8f0017a3e9f4.mockapi.io/api/v1'
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'fastly.picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
        ]
    }
}

module.exports = nextConfig
