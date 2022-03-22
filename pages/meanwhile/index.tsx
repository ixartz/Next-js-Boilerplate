import React, { useEffect, useRef } from "react";
import { PageIntro } from "../../components/PageIntro";
import { WidthContainer } from "../../components/WidthContainer";
import { Main } from "../../layout/Main";
import { Meta } from "../../layout/Meta";
import axios from "axios";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
import Script from "next/script";

export default function MeanwhilePage() {
  const player = useRef();
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

  const router = useRouter();

  useEffect(() => {
    if (window.MusePlayer) {
      console.log("setting up player");
      player.current = window.MusePlayer({
        container: "#museVideoPlayer",
        video: router.query.video || null,
        autoplay: true,
        loop: false,
        style: "no-controls",
        volume: 100,
        sizing: "fit",
        logo: false,
        width: "100%",
      });
      // setLoading(false);
      // Add listeners to increment video on end
      // player.current &&
      //   player.current.on("ended", () => incrementVideoIndex(1));
      return () => {
        player.current.video && player.current.off("ended");
      };
    }
  }, []);

  function loadVideo(videoId = null) {
    console.log("loading video", router.query.video);
    player.current && player.current.setVideo(videoId || router.query.video);
  }

  useEffect(() => {
    loadVideo();
  }, [router]);

  const { data, error } = useSWR(address, fetcher);

  if (error) return <p>Loading failed...</p>;
  if (!data) return <h1>Loading...</h1>;

  const { data: collections } = data;

  return (
    <Main
      meta={
        <Meta
          title="Meanwhile – Sam Stephenson"
          description="London-based digital product designer"
        />
      }
    >
      <Script src="https://muse.ai/static/js/embed-player.min.js" />
      <PageIntro>
        Meanwhile <span>{router.query.video || "no"}</span>
      </PageIntro>
      <WidthContainer leftAligned size="full">
        <div className="flex flex-wrap gap-2">
          {collections.map((collection, i) => (
            <VideoCollection collection={collection} key={i} />
          ))}
        </div>
      </WidthContainer>
    </Main>
  );
}

function VideoCollection({ collection }) {
  return (
    <div className="flex flex-col gap-1 p-4 pb-5 text-white rounded-lg bg-black/40 backdrop-filter backdrop-blur-lg">
      <h2>{collection.name}</h2>
      <ul className="flex gap-1 text-sm">
        {collection.videos.map((video, i) => (
          <li key={i}>
            <Link href={`/meanwhile?video=${video.svid}`}>
              <a className="block w-3 h-3 rounded bg-white/60"></a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
