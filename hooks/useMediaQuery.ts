"use client";

import { useEffect, useState } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const sync = () => setMatches(media.matches);

    sync();

    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, [query]);

  return matches;
}

export function usePrefersReducedMotion() {
  return useMediaQuery(REDUCED_MOTION_QUERY);
}
