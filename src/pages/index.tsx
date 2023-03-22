// import { useRouter } from 'next/router';

import { AppConfig } from 'src/config/AppConfig';
import { Main } from 'src/layouts/Main';
import { Meta } from 'src/seo/Meta';

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
