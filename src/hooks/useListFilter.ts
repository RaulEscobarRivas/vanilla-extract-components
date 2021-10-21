import { useMemo, useState } from 'react';
import {
  ListFilterParams,
  ListFilterReturn
} from './useListFilter.types';

export function useListFilter(params: ListFilterParams): ListFilterReturn {
  const { list, filterFn, defaultFilterValue } = params;
  const [filterValue, setFilterValue] = useState(defaultFilterValue);

  const filteredList = useMemo(() => (
    filterFn(filterValue, list)
  ), [filterValue]);

  return {
    filterValue,
    list: filteredList,
    setFilterValue,
  };
};