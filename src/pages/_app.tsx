import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import '~/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
        description="Widgets for Notion.so 🎨"
        openGraph={{
          url: 'https://notion-widgets.andredezzy.com/',
          site_name: 'notion-widgets.andredezzy.com',
          title: 'Notion Widgets',
          description: 'Widgets for Notion.so 🎨',
          images: [],
        }}
        titleTemplate="%s | Notion Widgets"
      />

      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
