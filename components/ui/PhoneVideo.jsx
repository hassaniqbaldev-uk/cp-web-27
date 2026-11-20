"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

// Screen area inside the mockup image (1624 x 1921), as percentages so the
// video stays aligned at any rendered size.
const SCREEN = {
  left: "36.33%",
  top: "2.55%",
  width: "43.1%",
  height: "79.86%",
};

const PhoneVideo = ({
  mockup,
  mockupWidth,
  mockupHeight,
  src,
  poster,
  screenClassName,
  className = "",
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Native controls sit at the bottom of the video, which can be hidden when
  // the mockup runs past the section edge, so play/pause lives at the top.
  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) video.play();
    else video.pause();
  };

  return (
    <div className={`relative ${className}`}>
      <Image
        src={mockup}
        alt=""
        width={mockupWidth}
        height={mockupHeight}
        className="block h-auto w-full"
      />

      <div
        style={screenClassName ? undefined : SCREEN}
        className={`absolute overflow-hidden rounded-[25px] bg-black ${screenClassName ?? ""}`}
      >
        <video
          ref={videoRef}
          playsInline
          preload="metadata"
          poster={poster}
          onClick={togglePlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          className="h-full w-full cursor-pointer"
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button
          type="button"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          onClick={togglePlay}
          className="absolute top-[15px] left-[15px] flex size-[45px] cursor-pointer items-center justify-center rounded-full bg-white"
        >
          {isPlaying ? (
            <Pause size={18} className="fill-black text-black" />
          ) : (
            <Play size={18} className="ml-[2px] fill-black text-black" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PhoneVideo;
