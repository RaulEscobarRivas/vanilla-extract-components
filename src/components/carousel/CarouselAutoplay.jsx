import { useCarouselAutoplay } from "./useCarouselAutoplay";

export function CarouselAutoplay({ children, interval }) {
  useCarouselAutoplay({ interval });

  return children;
}
