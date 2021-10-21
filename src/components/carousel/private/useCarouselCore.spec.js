import { renderHook, act } from "@testing-library/react-hooks";
import { useCarousel } from "./useCarouselCore";

describe("useCarousel", () => {
  it("should set an initial slide", () => {
    const { result } = renderHook(() =>
      useCarousel({
        initialSlide: 2,
      })
    );

    expect(result.current.slide).toBe(2);
    expect(result.current.direction).toBe(0);
  });

  it("should allow setSlide()", () => {
    const { result } = renderHook(() =>
      useCarousel({
        initialSlide: 2,
        slideCount: 4,
      })
    );

    act(() => {
      result.current.setSlide(0);
    });

    expect(result.current.slide).toBe(0);
    expect(result.current.direction).toBe(-2);
  });

  it("should not allow setSlide() outside limits", () => {
    const { result } = renderHook(() =>
      useCarousel({
        initialSlide: 2,
        slideCount: 4,
      })
    );

    act(() => {
      result.current.setSlide(16);
    });

    expect(result.current.slide).toBe(2);
  });

  it("should allow setNext()", () => {
    const { result } = renderHook(() =>
      useCarousel({
        initialSlide: 1,
        slideCount: 4,
      })
    );

    act(() => {
      result.current.setNext();
    });

    expect(result.current.slide).toBe(2);
    expect(result.current.direction).toBe(1);
  });

  it("should not allow setNext() to exceed boundary", () => {
    const { result } = renderHook(() =>
      useCarousel({
        initialSlide: 3,
        slideCount: 4,
      })
    );

    act(() => {
      result.current.setNext();
    });

    expect(result.current.slide).toBe(3);
  });

  it("should allow setNext() to exceed boundary when looping", () => {
    const { result } = renderHook(() =>
      useCarousel({
        initialSlide: 3,
        loop: true,
        slideCount: 4,
      })
    );

    act(() => {
      result.current.setNext();
    });

    expect(result.current.slide).toBe(0);
  });

  it("should allow setPrev()", () => {
    const { result } = renderHook(() =>
      useCarousel({
        initialSlide: 2,
        slideCount: 4,
      })
    );

    act(() => {
      result.current.setPrev();
    });

    expect(result.current.slide).toBe(1);
    expect(result.current.direction).toBe(-1);
  });

  it("should not allow setPrev() to exceed boundary", () => {
    const { result } = renderHook(() =>
      useCarousel({
        initialSlide: 0,
        slideCount: 4,
      })
    );

    act(() => {
      result.current.setPrev();
    });

    expect(result.current.slide).toBe(0);
  });

  it("should allow setPrev() to exceed boundary when looping", () => {
    const { result } = renderHook(() =>
      useCarousel({
        initialSlide: 0,
        loop: true,
        slideCount: 4,
      })
    );

    act(() => {
      result.current.setPrev();
    });

    expect(result.current.slide).toBe(3);
  });

  it("should allow slideCount to be changed", () => {
    let slideCount = 4;

    const { result, rerender } = renderHook(() =>
      useCarousel({
        initialSlide: 3,
        loop: true,
        slideCount,
      })
    );

    slideCount = 3;

    act(() => {
      rerender();
    });

    expect(result.current.slide).toBe(2);
    expect(result.current.slideCount).toBe(3);
  });
});
