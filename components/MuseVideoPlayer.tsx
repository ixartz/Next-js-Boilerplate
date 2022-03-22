import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

declare global {
  interface Window {
    MusePlayer: any;
  }
  interface HTMLDivElement {
    setVideo: any;
  }
}

export default function MuseVideoPlayer() {
  const [aspectRatio, setAspectRatio] = useState(0);
  const router = useRouter();
  const player = useRef<HTMLDivElement>();
  const targetRatio = 16 / 9;

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
      // Add listeners to increment video on end
      // player.current &&
      //   player.current.on("ended", () => incrementVideoIndex(1));
      return () => {
        // player.current && player.current.video && player.current.off("ended");
      };
    }
  }, []);

  useEffect(() => {
    loadVideo();
  }, [router]);

  function loadVideo() {
    player.current && player.current.setVideo(router.query.video);
  }

  // Updates aspect ratio on window resize
  useEffect(() => {
    function handleResize() {
      setAspectRatio(window.innerWidth / window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 z-10 w-screen h-96 bg-gradient-to-b from-black/30"></div>
      <div
        className="flex"
        style={{
          aspectRatio: `16/9`,
          width: aspectRatio > targetRatio && "100vw",
          height: aspectRatio < targetRatio && "100vh",
        }}
      >
        <div id="museVideoPlayer" className="z-0 w-full h-full"></div>
      </div>
    </div>
  );
}
