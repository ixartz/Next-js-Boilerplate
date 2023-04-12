import Counter from '@/components/home/Counter';
import Demografi from '@/components/home/Demografi';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slide from '@/components/home/Slide';

import Artikel from '../../components/home/Artikel';

export default function Home() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <Slide />
      </div>
      <Artikel />
      {/* count */}
      <div className="mt-5 py-4">
        <Counter />
      </div>
      <div className="flex flex-row py-10">
        <Demografi />
      </div>
    </>
  );
}
