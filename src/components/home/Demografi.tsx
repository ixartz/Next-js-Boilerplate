import { useRouter } from 'next/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import CountUp from 'react-countup';

export default function Demografi() {
  const router = useRouter();
  return (
    <>
      <div className="w-full">
        <img
          src={`${router.basePath}/assets/images/geografis.png`}
          alt="header logo"
          className="w-full"
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <div className="text-sm font-black">DEMOGRAFI PENDUDUK</div>
        <div className="text-2xl font-black">
          Kabupaten <span className="text-primary"> Garut</span>
        </div>
        <div className="w-[50px] border-b-[2px] border-primary"></div>
        <div className="flex flex-col gap-2 pt-5">
          <div className="flex flex-row gap-3">
            <div className="flex w-full flex-col rounded-md border p-2 text-center shadow-md">
              <div className="flex justify-center">
                <img
                  src={`${router.basePath}/assets/images/kk.png`}
                  alt="logo kk"
                  className="w-fit"
                />
              </div>
              <CountUp
                className="text-3xl font-bold"
                start={0}
                end={915327}
                duration={3}
                separator="."
              />
              <div className="text-2xl font-bold">KK</div>
              <div className="text-sm text-[#afafaf]">KEPALA KELUARGA</div>
            </div>
            <div className="flex w-full flex-col rounded-md border p-2 text-center shadow-md">
              <div className="flex justify-center">
                <img
                  src={`${router.basePath}/assets/images/jiwa.png`}
                  alt="logo jiwa"
                  className="w-fit"
                />
              </div>
              <CountUp
                className="text-3xl font-bold"
                start={0}
                end={2759490}
                duration={3}
                separator="."
              />
              <div className="text-2xl font-bold">Jiwa</div>
              <div className="text-sm text-[#afafaf]">JUMLAH PENDUDUK</div>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex w-full flex-col rounded-md border p-2 text-center shadow-md">
              <div className="flex justify-center">
                <img
                  src={`${router.basePath}/assets/images/laki.png`}
                  alt="logo laki"
                  className="w-fit"
                />
              </div>
              <CountUp
                className="text-3xl font-bold"
                start={0}
                end={1408225}
                duration={3}
                separator="."
              />
              <div className="text-2xl font-bold">Jiwa</div>
              <div className="text-sm text-[#afafaf]">LAKI-LAKI</div>
            </div>
            <div className="flex w-full flex-col rounded-md border p-2 text-center shadow-md">
              <div className="flex justify-center">
                <img
                  src={`${router.basePath}/assets/images/wanita.png`}
                  alt="logo wanita"
                  className="w-fit"
                />
              </div>
              <CountUp
                className="text-3xl font-bold"
                start={0}
                end={135165}
                duration={3}
                separator="."
              />
              <div className="text-2xl font-bold">Jiwa</div>
              <div className="text-sm text-[#afafaf]">PEREMPUAN</div>
            </div>
          </div>
          <div className="flex flex-col text-xs text-[#afafaf]">
            <span>Sumber : Dinas Kependudukan dan Catatan Sipil</span>
            <span>Berdasarkan DKB Semester II Tahun 2022</span>
          </div>
        </div>
      </div>
    </>
  );
}
