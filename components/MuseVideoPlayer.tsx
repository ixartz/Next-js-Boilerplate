import { useEffect, useState } from "react";

export default function MuseVideoPlayer() {
  const [aspectRatio, setAspectRatio] = useState(0);
  const targetRatio = 16 / 9;

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
    <div className="fixed inset-0 overflow-hidden">
      <div
        className="flex items-center justify-center"
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
