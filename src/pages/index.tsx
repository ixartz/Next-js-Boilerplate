import { dehydrate, QueryClient, useQuery } from 'react-query';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const ping = async () => {
  const res = await fetch('https://my.backend/ping');
  return res.json();
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('ping', ping);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Index = () => {
  const { data } = useQuery('ping', ping);

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h3> Home: {data?.answer} </h3>
    </Main>
  );
};

export default Index;
