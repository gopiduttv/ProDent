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
      <link rel="icon" href={seoSettings?.logoUrl} sizes="any" />
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
