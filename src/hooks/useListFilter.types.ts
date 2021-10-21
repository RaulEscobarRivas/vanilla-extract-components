type ListItem = {
  id: string;
  label: string;
};

type ListItemArray = ListItem[];

export interface ListFilterParams {
  defaultFilterValue?: string;
  list: ListItemArray;
  filterFn: (string, ListItemArray) => ListItemArray;
}

export interface ListFilterReturn {
  filterValue: string;
  list: ListItemArray;
  setFilterValue: Function;
}
