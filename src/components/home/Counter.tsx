// eslint-disable-next-line import/no-extraneous-dependencies
import CountUp from 'react-countup';
import { FiArrowRight } from 'react-icons/fi';

export default function Counter() {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex flex-col items-center gap-3 text-center text-xl font-bold">
        <div className="text-center text-xl font-bold">
          Statistik <span className="text-[#fa65b1]"> Satu Data Garut</span>
          <div className="mx-10 border-b-[2px] border-primary pt-3"></div>
        </div>
      </div>

      <div className="flex w-full flex-row justify-center gap-3">
        <div className="flex w-1/4 flex-col gap-2 rounded-md border p-2 text-center shadow-md">
          <CountUp
            className="text-3xl font-bold"
            start={0}
            end={312}
            duration={2.5}
            separator=","
          />
          <div className="text-base font-bold">Total Dataset</div>
          <div className="flex-1 text-sm">
            Kumpulan data-data berupa tabel yang dapat diolah lebih lanjut.
          </div>
          <div className="flex cursor-pointer flex-row justify-center gap-1.5 rounded-md bg-[#dddddd] py-1.5 text-base hover:bg-primary hover:text-white">
            <span className="hover:text-white">Lihat selengkapnya</span>
            <div className="self-center">
              <FiArrowRight />
            </div>
          </div>
        </div>
        <div className="flex w-1/4 flex-col gap-2 rounded-md border p-2 text-center shadow-md">
          <CountUp
            className="text-3xl font-bold"
            start={0}
            end={312}
            duration={2.5}
            separator=","
          />
          <div className="text-base font-bold">Total Organisasi</div>
          <div className="flex-1 text-sm">
            Organisasi Perangkat Daerah yang datanya dipublikasikan di Satu Data
            Garut.
          </div>
          <div className="flex cursor-pointer flex-row justify-center gap-1.5 rounded-md bg-[#dddddd] py-1.5 text-base hover:bg-primary hover:text-white">
            <span className="hover:text-white">Lihat selengkapnya</span>
            <div className="self-center">
              <FiArrowRight />
            </div>
          </div>
        </div>
        <div className="flex w-1/4 flex-col gap-2 rounded-md border p-2 text-center shadow-md">
          <CountUp
            className="text-3xl font-bold"
            start={0}
            end={312}
            duration={2.5}
            separator=","
          />
          <div className="text-base font-bold">Total Visualisasi</div>
          <div className="flex-1 text-sm">
            Gambaran Informasi data tertentu dalam bentuk visual.
          </div>
          <div className="flex cursor-pointer flex-row justify-center gap-1.5 rounded-md bg-[#dddddd] py-1.5 text-base hover:bg-primary hover:text-white">
            <span className="hover:text-white">Lihat selengkapnya</span>
            <div className="self-center">
              <FiArrowRight />
            </div>
          </div>
        </div>
        <div className="flex w-1/4 flex-col gap-2 rounded-md border p-2 text-center shadow-md">
          <CountUp
            className="text-3xl font-bold"
            start={0}
            end={312}
            duration={2.5}
            separator=","
          />
          <div className="text-base font-bold">Total Infografik</div>
          <div className="flex-1 text-sm">
            Informasi yang disajikan dalam bentuk grafik yang akan mempermudah
            memahami data.
          </div>
          <div className="flex cursor-pointer flex-row justify-center gap-1.5 rounded-md bg-[#dddddd] py-1.5 text-base hover:bg-primary hover:text-white">
            <span className="hover:text-white">Lihat selengkapnya</span>
            <div className="self-center">
              <FiArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
