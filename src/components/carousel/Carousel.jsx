import React from "react";
import { CarouselContext } from "./context";
import { useCarousel } from "./private/useCarouselCore";

export function Carousel({ children, initialSlide, loop, slideCount }) {
  const carousel = useCarousel({
    initialSlide,
    loop,
    slideCount,
  });

  return (
    <CarouselContext.Provider value={carousel}>
      {children}
    </CarouselContext.Provider>
  );
}
