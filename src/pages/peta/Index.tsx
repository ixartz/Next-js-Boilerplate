/* eslint-disable import/no-extraneous-dependencies */
import dynamic from 'next/dynamic';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import kecamatanData from '../../../public/kecamatan.json';
// import Tabel from './Tabel';

const Index = () => {
  const MapWithNoSSR = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => <p>Loading map...</p>,
  });

  const Tabel = React.lazy(() => import('./Tabel'));
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

        <div className="flex h-screen w-full items-center justify-center">
          <div>
            <h1>Peta Kecamatan Garut</h1>
            <div
              id="map"
              style={{ height: '500px', width: '1000px', position: 'relative' }}
            >
              <MapWithNoSSR dataKecamatan={kecamatanData} />
            </div>
          </div>
        </div>
        <React.Suspense fallback={<p>Loading table...</p>}>
          <Tabel data={kecamatanData} />
        </React.Suspense>
      </div>
    </Main>
  );
};

export default Index;
