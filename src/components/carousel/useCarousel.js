import { useContext } from "react";
import { CarouselContext } from "./context";

export const useCarousel = () => useContext(CarouselContext);
