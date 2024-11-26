import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React from 'react'
import { SharedPageProps } from './_app'
import {
  getLegalInformation,
  getPost,
  LegalInformation,
  Post,
} from '~/lib/sanity.queries'
import { getClient } from '~/lib/sanity.client'
import { readToken } from '~/lib/sanity.api'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'

export const getStaticProps: GetStaticProps<
  SharedPageProps & {
    legalInformation: LegalInformation
  },
  any
> = async ({ draftMode = false, params = {} }) => {
  const client = getClient(draftMode ? { token: readToken } : undefined)
  const legalInformation = await getLegalInformation(client,'businessAgreement')

  if (!legalInformation) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      draftMode,
      token: draftMode ? readToken : '',
      legalInformation,
    },
  }
}

export default function TermsofUse(
  props: InferGetStaticPropsType<typeof getStaticProps>,
) {
  const businessAgreement: PortableTextBlock = props.legalInformation[0].businessAgreement
  return (
    <div className='md:prose md:prose-zinc md:prose-sm md:m-auto p-9' >
        <PortableText value={businessAgreement} />

    </div>
  )
}
