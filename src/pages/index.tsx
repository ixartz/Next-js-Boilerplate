// import { useRouter } from 'next/router';

import { AppConfig } from 'src/config/AppConfig';
import { Meta } from 'src/layouts/Meta';
import { Main } from 'src/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <div>Hello World</div>
    </Main>
  );
};

export default Index;
