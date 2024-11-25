import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL?.endsWith('/')
      ? process.env.NEXT_PUBLIC_BASE_URL.slice(0, -1)
      : process.env.NEXT_PUBLIC_BASE_URL

    if (!SITE_URL) {
      return res
        .status(500)
        .json({ error: 'Base URL not set in environment variables' })
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">

      <url>
        <loc>${SITE_URL}/</loc>
        <xhtml:link
          rel="alternate"
          hreflang="en-AU"
          href="${SITE_URL}/en-AU" />
        <xhtml:link
          rel="alternate"
          hreflang="en"
          href="${SITE_URL}/" />
      </url>

      <url>
        <loc>${SITE_URL}/en-AU</loc>
        <xhtml:link
          rel="alternate"
          hreflang="en-AU"
          href="${SITE_URL}/en-AU" />
        <xhtml:link
          rel="alternate"
          hreflang="en"
          href="${SITE_URL}/" />
      </url>

    </urlset>`

    res.setHeader('Content-Type', 'application/xml')
    res.write(sitemap)
    res.end()
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate sitemap' })
  }
}
