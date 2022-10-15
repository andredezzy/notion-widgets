import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo title="Notion Widgets" />

      <main>
        <h1>Notion Widgets</h1>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};
