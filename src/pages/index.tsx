import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

// eslint-disable-next-line import/no-named-as-default
import Home from './home/Home';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Garut Satu Data"
          description="Satu Data Garut adalah portal terintegrasi untuk pengelolaan, keterbukaan, dan kemudahan akses data bagi warga dan pemerintah Kabupaten Garut."
        />
      }
    >
      <Home />
    </Main>
  );
};

export default Index;
