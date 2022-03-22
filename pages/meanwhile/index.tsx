import React from "react";
import { WidthContainer } from "../../components/WidthContainer";
import { Main } from "../../layout/Main";
import { Meta } from "../../layout/Meta";
import axios from "axios";
import Link from "next/link";
import useSWR from "swr";
import Script from "next/script";
import { useRouter } from "next/router";
import { getDescription } from "../../_data/meanwhileDescriptions";

const address = `https://muse.ai/api/files/collections`;
const fetcher = async (url) => {
  try {
    const res = await axios.get(url, {
      headers: {
        Key: "Nw0yOccJlLK0pR2nU7CnT8Ht60b7598e",
      },
    });
    console.log(res);
    return res;
  } catch (e) {
    console.error(e);
  }
};

export default function MeanwhilePage() {
  const router = useRouter();
  const { data, error } = useSWR(address, fetcher);
  if (error) return <p>Loading failed...</p>;

  console.log("data", data);

  if (!router.query.video && data)
    router.push(`/meanwhile/?video=${data.data[0].videos[0].svid}`);

  return (
    <Main
      meta={
        <Meta
          title="Meanwhile – Sam Stephenson"
          description="London-based digital product designer"
        />
      }
    >
      {data ? <DesktopMenu data={data} /> : <p>Loading…</p>}
      {/* <MobileMenu data={data} /> */}
      <Script src="https://muse.ai/static/js/embed-player.min.js" />
    </Main>
  );
}

function MenuWrapper({ children }) {
  return (
    <>
      <WidthContainer leftAligned size="full">
        <div className="flex-col flex-wrap hidden gap-4 p-4 pb-5 text-white rounded-md md:flex bg-black/60 backdrop-filter backdrop-blur-lg w-80 md:-ml-0.5">
          {children}
        </div>
      </WidthContainer>
      <div className="flex flex-col gap-4 p-4 rounded-lg md:hidden bottom-2 left-2 right-2 bg-black/60 backdrop-filter backdrop-blur">
        {children}
      </div>
    </>
  );
}

function DesktopMenu({ data }) {
  return (
    <MenuWrapper>
      {data ? (
        data.data.map((collection, i) => (
          <VideoCollection collection={collection} key={i} />
        ))
      ) : (
        <p>loading…</p>
      )}
      <hr className="opacity-20" />
      <p className="text-sm text-white/60">
        <em>Meanwhile.</em>&nbsp;Binaural recordings of everyday places.
        Headphones recommended.
      </p>
    </MenuWrapper>
  );
}

function VideoCollection({ collection }) {
  const router = useRouter();
  const isActive = collection.videos
    .map((x) => x.svid)
    .includes(router.query.video);
  const { name, description } = getDescription(collection.name);
  return (
    <>
      <div className="flex-col hiddent lg:flex">
        <h4
          className={`text-sm font-medium tracking-wide uppercase ${
            !isActive && "text-white/80"
          }`}
        >
          {name || collection.name}
        </h4>
        <ThumbList videos={collection.videos} />
        {isActive && description && (
          <p className="text-sm opacity-80">{description}</p>
        )}
      </div>
    </>
  );
}

function ThumbList({ videos }) {
  const router = useRouter();
  return (
    <ul className="flex w-full gap-2 my-2 overflow-x-scroll text-sm md:gap-1">
      {videos.map((video, i) => (
        <li key={i}>
          <Link href={`/meanwhile?video=${video.svid}`}>
            <a
              className="block w-8 h-8 transition-all bg-white rounded-sm md:w-3 md:h-3 opacity-40 hover:opacity-60"
              style={{
                opacity: video.svid === router.query.video && 1,
              }}
            ></a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
