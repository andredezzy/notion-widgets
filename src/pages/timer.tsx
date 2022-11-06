import { GetServerSideProps } from 'next';
import { NextSeo } from 'next-seo';

import { Timer } from '~/components/Timer';

interface TimerPageProps {
  title: string;
  initialSeconds: number;
}

export default function TimerPage({ title, initialSeconds }: TimerPageProps) {
  return (
    <>
      <NextSeo title="Timer" />

      <Timer initialSeconds={initialSeconds} title={title} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<TimerPageProps> = async ({
  query,
}) => {
  const { title = 'Timer ⏳', initialSeconds = 0 } = query;

  return {
    props: {
      title: String(title),
      initialSeconds: Number(initialSeconds),
    },
  };
};
