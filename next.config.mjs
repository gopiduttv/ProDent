/** @type {import('next').NextConfig} */
const config = {
  images: { remotePatterns: [{ hostname: 'cdn.sanity.io' }] },
  env: {
    PUBLIC_URL: "/"
  }
}

export default config
