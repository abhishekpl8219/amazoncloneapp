/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'fakestoreapi.com'

            },
            {
                protocol:'https',
                hostname:'images-eu.ssl-images-amazon.com'

            },
        ]
    }
};

export default nextConfig;
