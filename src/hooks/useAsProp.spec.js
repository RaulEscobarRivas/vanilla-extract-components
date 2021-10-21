import { renderHook, act } from "@testing-library/react-hooks";
import { useAsProp } from "./useAsProp";

describe("useAsProp", () => {
  it("should return Tag and props", () => {
    const { result } = renderHook(() =>
      useAsProp(
        {
          as: "h1",
          className: "classname_1",
        },
        {
          className: "classname_2",
        }
      )
    );
    const [Tag, props] = result.current;

    expect(Tag).toBe("h1");
    expect(props).toEqual({
      className: "classname_2 classname_1",
    });
  });

  it("should return div as default Tag", () => {
    const { result } = renderHook(() => useAsProp({}));
    const [Tag] = result.current;

    expect(Tag).toBe("div");
  });
});
