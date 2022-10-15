import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';

import { Countdown } from '~/components/Countdown';

export default function CountdownPage() {
  return (
    <>
      <NextSeo title="Countdown" />

      <Countdown totalSeconds={120} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
