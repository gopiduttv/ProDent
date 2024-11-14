import Head from 'next/head';
import React from 'react';
import { urlForImage } from '~/lib/sanity.image';
import { SiteSettings } from '~/lib/sanity.queries';

export default function CustomHead({ siteSettings }: { siteSettings: SiteSettings }) {
  return (
    <Head>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteSettings?.ogUrl} />
      <meta property="og:title" content={siteSettings?.ogTitle} />
      <meta property="og:description" content={siteSettings?.ogDescription} />
      <meta property="og:image" content={urlForImage(siteSettings?.ogImage)?.url()} />
    </Head>
  );
}
