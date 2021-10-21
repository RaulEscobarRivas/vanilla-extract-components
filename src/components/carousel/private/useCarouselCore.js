import { useCallback, useEffect, useState } from "react";

const defaultParams = {};

export function useCarousel(params = defaultParams) {
  const { initialSlide, loop = false, slideCount } = params;

  // The source of truth for which slide we are on.
  const [[slide, direction], setSlide] = useState([initialSlide || 0, 0]);

  // Here we need to change the last slide if it's set to be more than the number of slides.
  useEffect(() => {
    if (slideCount <= slide) {
      setSlide((current) => [slide - 1, current[1]]);
    }
  }, [slideCount]);

  // Here we make sure that the next slide is between [0 - <number of slides>]
  const setSlideWithinLimits = useCallback(
    (nextSlide) => {
      if (nextSlide > -1 && nextSlide < slideCount) {
        setSlide((current) => {
          if (nextSlide === current[0]) {
            return current;
          }

          return [nextSlide, nextSlide - current[0]];
        });
      }
    },
    [slideCount]
  );

  const setNext = useCallback(() => {
    setSlide((current) => {
      // The end of the carousel has been reached.
      if (!loop && current[0] === slideCount - 1) {
        return current;
      }

      return [(current[0] + 1) % slideCount, 1];
    });
  }, [loop, slideCount]);

  const setPrev = useCallback(() => {
    setSlide((current) => {
      if (current[0] > 0) {
        return [current[0] - 1, -1];
      }

      // If we are already at the beginning of the
      // carousel, then we cannot go back.
      if (!loop && current[0] === 0) {
        return current;
      }

      return [slideCount - 1, -1];
    });
  }, [loop, slideCount]);

  return {
    direction,
    loop,
    slide,
    slideCount,
    setNext,
    setPrev,
    setSlide: setSlideWithinLimits,
  };
}
