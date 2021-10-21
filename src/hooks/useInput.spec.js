import { renderHook, act } from "@testing-library/react-hooks";
import { useInput } from "./useInput";

describe("useInput", () => {
  it("should set an initial value", () => {
    const { result } = renderHook(() =>
      useInput({
        value: "test",
      })
    );
    const [value] = result.current;

    expect(value).toBe("test");
  });

  it('should set initial value to "" when none given', () => {
    const { result } = renderHook(() =>
      useInput({
        value: undefined,
      })
    );
    const [value] = result.current;

    expect(value).toBe("");
  });

  it("should update value", () => {
    const { result } = renderHook(() =>
      useInput({
        value: "abc",
      })
    );
    const [, setValue] = result.current;

    // We assume that a ChangeEvent triggers the change,
    // so we need to match it's shape.
    act(() => {
      setValue({
        target: {
          value: "def",
        },
      });
    });

    expect(result.current[0]).toBe("def");
  });

  it('should update value to ""', () => {
    const { result } = renderHook(() =>
      useInput({
        value: "abc",
      })
    );
    const [, setValue] = result.current;

    // We assume that a ChangeEvent triggers the change,
    // so we need to match it's shape.
    act(() => {
      setValue({
        target: {
          value: "",
        },
      });
    });

    expect(result.current[0]).toBe("");
  });

  it("should call onChange when value is updated", () => {
    const onChange = jest.fn();
    const { result } = renderHook(() =>
      useInput({
        value: "abc",
        onChange,
      })
    );
    const [, setValue] = result.current;

    // We assume that a ChangeEvent triggers the change,
    // so we need to match it's shape.
    act(() => {
      setValue({
        target: {
          value: "def",
        },
      });
    });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({
      target: {
        value: "def",
      },
    });
  });
});
