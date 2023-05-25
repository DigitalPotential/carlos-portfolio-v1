/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "default",
        path: "/_next/image",
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      },
}

module.exports = nextConfig
