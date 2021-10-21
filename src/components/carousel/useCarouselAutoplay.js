import { useCallback, useEffect, useState } from "react";
import { useCarousel } from "./useCarousel";

export function useCarouselAutoplay({ interval = 5000 }) {
  const { setNext, slide } = useCarousel();
  const [isPlaying, setIsPlaying] = useState(true);

  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const timer = setTimeout(setNext, interval);

    return () => clearTimeout(timer);
  }, [isPlaying, slide]);

  useEffect(() => {
    window.addEventListener("blur", pause);
    window.addEventListener("focus", play);

    return () => {
      window.removeEventListener("blur", pause);
      window.removeEventListener("focus", play);
    };
  }, []);

  return {
    isPlaying,
    pause,
    play,
  };
}
