// import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta title="Joshua Tree Academy" description="Description yahan" />
      }
    >
      <div></div>
    </Main>
  );
};

export default Index;
