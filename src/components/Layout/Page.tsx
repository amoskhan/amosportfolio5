import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(
  ({children, title, description, siteUrl = '', ogImageUrl, twitterCardType = 'summary', twitterCreator}) => {
    const {asPath} = useRouter();
    const pathname = asPath.split(/[?#]/)[0];
    const url = `${siteUrl}${pathname === '/' ? '' : pathname}`;
    const ogImage = ogImageUrl && `${siteUrl}${ogImageUrl}`;

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={description} name="description" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#ffffff" media="(prefers-color-scheme: light)" name="theme-color" />
          <meta content="#0a0a0a" media="(prefers-color-scheme: dark)" name="theme-color" />

          {/* several domains list the same content, make sure google knows we mean this one. */}
          <link href={url} key="canonical" rel="canonical" />

          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/site.webmanifest" rel="manifest" />

          {/* Open Graph : https://ogp.me/ */}
          <meta content="website" property="og:type" />
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta content={url} property="og:url" />
          {ogImage && <meta content={ogImage} property="og:image" />}
          {ogImage && <meta content="1200" property="og:image:width" />}
          {ogImage && <meta content="630" property="og:image:height" />}

          {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
          <meta content={twitterCardType} name="twitter:card" />
          <meta content={title} name="twitter:title" />
          <meta content={description} name="twitter:description" />
          {twitterCreator && <meta content={twitterCreator} name="twitter:creator" />}
          {ogImage && <meta content={ogImage} name="twitter:image" />}
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = 'Page';
export default Page;
