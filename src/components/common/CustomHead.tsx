import Head from 'next/head'
import React from 'react'
import { SiteSettings } from '~/lib/sanity.queries'

export default function CustomHead({
  siteSettings,
}: {
  siteSettings: SiteSettings
}) {
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteSettings?.ogUrl} />
      <meta property="og:title" content={siteSettings?.ogTitle} />
      <meta property="og:description" content={siteSettings?.ogDescription} />
      <meta
        property="og:image"
        content={
          'https://cdn.sanity.io/images/d25cvgl0/production/edc86160ec49c628644c9cf76a16f1168391ac9b-1800x945.png'
        }
      />
    </Head>
  )
}
