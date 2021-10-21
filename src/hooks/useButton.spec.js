import { renderHook, act } from '@testing-library/react-hooks';
import { useButton } from './useButton';
describe('useButton', () => {
  it('should return Tag and props', () => {
    const { result } = renderHook(() => useButton(
      {
        className: 'button',
      },
      {
        className: 'p-4',
      }
    ));
    const [ Tag, props ] = result.current;

    expect(Tag).toBe('button');
    expect(props).toEqual({
      className: 'p-4 button',
    });
  });

  it('should return custom Tag', () => {
    const { result } = renderHook(() => useButton(
      {
        as: 'a',
      }
    ));
    const [ Tag ] = result.current;

    expect(Tag).toBe('a');
  });
});