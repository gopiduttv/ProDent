import Head from 'next/head'
import React from 'react'
import { SiteSettings } from '~/lib/sanity.queries'
import { formatOrganizationSchema } from '../utils/common'

export default function CustomHead({
  siteSettings,
  seoSettings,
}: {
  siteSettings: SiteSettings
  seoSettings: any
}) {
  const SchemaData = formatOrganizationSchema(seoSettings)

  return (
    <Head>
      <title>Welcome to ProDent Partners</title>
      <link rel="icon" href={"https://cdn.sanity.io/images/oreukei6/production/3d798c4b5a62440025cae017b2e4884247a85caa-128x128.png"} sizes="any" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteSettings?.ogUrl} />
      <meta property="og:title" content={siteSettings?.ogTitle} />
      <meta property="og:description" content={siteSettings?.ogDescription} />
      <meta property="og:image" content={siteSettings?.ogImage} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SchemaData) }}
      ></script>
    </Head>
  )
}
