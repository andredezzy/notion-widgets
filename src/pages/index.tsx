import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

import GithubLogo from '../../public/images/github.svg';

export default function Home() {
  return (
    <>
      <NextSeo title="Notion Widgets" titleTemplate="%s" />

      <main className="flex flex-col gap-8 items-center justify-center h-screen w-screen bg-black">
        <h1 className="text-white font-bold text-5xl">Notion Widgets</h1>

        <Link
          href="https://github.com/andredezzy/notion-widgets"
          target="_blank"
        >
          <a>
            <GithubLogo className="fill-white" width={36} />
          </a>
        </Link>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({}) => {
  return {
    props: {},
  };
};
