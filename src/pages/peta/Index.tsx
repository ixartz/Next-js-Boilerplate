import dynamic from 'next/dynamic';
import { FiSearch } from 'react-icons/fi';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const MapWithNoSSR = dynamic(() => import('./Map'), {
    ssr: false,
  });
  return (
    <Main
      meta={
        <Meta
          title="Peta"
          description="Satu Data Garut adalah portal terintegrasi untuk pengelolaan, keterbukaan, dan kemudahan akses data bagi warga dan pemerintah Kabupaten Garut."
        />
      }
    >
      <div className="w-full">
        <div>Judul</div>
        <div className="flex w-full flex-row gap-3 pb-4">
          <div className="w-full">
            <label
              htmlFor="countries"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Sumber
            </label>
            <select
              id="countries"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary dark:focus:ring-primary"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor="countries"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Elemen
            </label>
            <select
              id="countries"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary dark:focus:ring-primary"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="w-full">
            <label
              htmlFor="countries"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Tahun
            </label>
            <select
              id="countries"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary dark:focus:ring-primary"
            >
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mt-7 flex items-center rounded-md border border-primary bg-white px-5 py-2 text-sm text-primary hover:bg-primary hover:text-white"
            >
              <FiSearch className="mr-2" />
              <span>Cari</span>
            </button>
          </div>
        </div>
        <div>
          {' '}
          <div className="flex h-screen w-full items-center justify-center">
            <div>
              <h1>Peta Kecamatan Garut</h1>
              <div id="map" style={{ height: '500px', width: '1000px' }}>
                <MapWithNoSSR />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Index;