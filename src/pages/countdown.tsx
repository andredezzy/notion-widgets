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
  const { title, totalSeconds } = query;

  return {
    props: {
      title: String(title) || 'Countdown',
      totalSeconds: Number(totalSeconds) || 120,
    },
  };
};
