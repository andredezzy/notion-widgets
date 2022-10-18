import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import { Countdown } from '~/components/Countdown';

interface CountdownPageProps {
  title: string;
  totalSeconds: number;
}

export default function CountdownPage({
  title,
  totalSeconds,
}: CountdownPageProps) {
  return (
    <>
      <NextSeo title="Countdown" />

      <Countdown title={title} totalSeconds={totalSeconds} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<
  CountdownPageProps
> = async ({ query }) => {
  const { title = 'Countdown ⏳', totalSeconds = 120 } = query;

  return {
    props: {
      title: String(title),
      totalSeconds: Number(totalSeconds),
    },
  };
};
