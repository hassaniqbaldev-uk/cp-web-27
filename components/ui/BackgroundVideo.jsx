"use client";

import { useEffect, useRef } from "react";

// Decorative, always-playing video: no controls, no PiP/cast, not clickable.
// React doesn't reliably render the `muted` attribute into the server HTML, and
// browsers block unmuted autoplay, so it's forced on the element before play().
const BackgroundVideo = ({ src, type = "video/mp4", className = "" }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      controlsList="nodownload nofullscreen noremoteplayback"
      tabIndex={-1}
      aria-hidden="true"
      onContextMenu={(e) => e.preventDefault()}
      className={`pointer-events-none ${className}`}
    >
      <source src={src} type={type} />
    </video>
  );
};

export default BackgroundVideo;
