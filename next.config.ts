import createNextIntlPlugin from 'next-intl/plugin'

import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.i18n.ts')

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com' }],
  },
}

export default withNextIntl(nextConfig)
