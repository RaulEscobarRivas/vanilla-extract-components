import { renderHook } from '@testing-library/react-hooks';
import { useListFilter } from './useListFilter';

describe('useListFilter', () => {
  it('should return a filtered list', () => {
    const list = [
      { label: 'AB', value: 'ab'},
      { label: 'BC', value: 'bc'},
      { label: 'CD', value: 'cd'},
    ];
    const filterFn = (value, list) => (
      list.filter(item => item.label.includes(value))
    );
    const { result } = renderHook(() => useListFilter({
      defaultFilterValue: 'B',
      list,
      filterFn,
    }));

    expect(result.current.filterValue).toBe('B');
    expect(result.current.list).toEqual([
      { label: 'AB', value: 'ab'},
      { label: 'BC', value: 'bc'},
    ]);
  });
});