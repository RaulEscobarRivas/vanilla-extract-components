import { renderHook, act } from '@testing-library/react-hooks';
import { useControlProp } from './useControlProp';

describe('useControlProp', () => {
  it('should set an initial value', () => {
    const { result } = renderHook(() => useControlProp('test'));
    const [ value ] = result.current;

    expect(value).toBe('test');
  });

  it('should set initial value to "" when none given', () => {
    const { result } = renderHook(() => useControlProp());
    const [ value ] = result.current;

    expect(value).toBe("");
  });

  it('should update the value', () => {
    const { result } = renderHook(() => useControlProp('abc'));
    const [, setValue ] = result.current;

    act(() => {
      setValue('def');
    });

    expect(result.current[0]).toBe("def");
  });

  it('should update the value to be falsey', () => {
    const { result } = renderHook(() => useControlProp('abc'));
    const [, setValue ] = result.current;

    act(() => {
      setValue();
    });

    expect(result.current[0]).toBe(undefined);
  });
});