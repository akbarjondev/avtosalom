import million from 'million/compiler'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

const millionConfig = {
  auto: {
    rsc: true,
  },
}

const nextConfigWithNextIntl = withNextIntl(nextConfig)

export default million.next(nextConfigWithNextIntl, millionConfig)
