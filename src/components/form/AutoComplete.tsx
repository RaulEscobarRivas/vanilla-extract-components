import React, { useState } from "react";
import { Input } from "./Input";
import { InputGroup } from "./InputGroup";
import { InputAddonIcon } from "./InputAddonIcon";
import { InputAddonLeft } from "./InputAddonLeft";
import { ListBox } from "../listbox/ListBox";
import { ListBoxOption } from "../listbox/ListBoxOption";
import { MagnifierIcon } from "../../icons/Magnifier";
import { useListFilter } from "../../hooks/useListFilter";
import { autocompleteStyle, autocompleteListStyle } from "./AutoComplete.css";
import { AutoCompleteProps } from "./types";

const filterFn = (needle, haystack) => {
  const needleLowerCase = needle.toLowerCase();

  return haystack.filter((item) =>
    item.label.toLowerCase().includes(needleLowerCase)
  );
};

export function AutoComplete(props: AutoCompleteProps) {
  const {
    isInvalid,
    onBlur,
    onInputChange,
    onFocus,
    onSelect,
    options,
    placeholder,
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const { filterValue, list, setFilterValue } = useListFilter({
    defaultFilterValue: "",
    filterFn,
    list: options,
  });

  const handleSelect = (next) => {
    const { label } = options.find((item) => item.id === next);

    if (onSelect) {
      onSelect(next);
    }

    setIsFocused(false);
    setFilterValue(label);
  };

  const handleChange = (event) => {
    if (onInputChange) {
      onInputChange(event);
    }

    if (onSelect) {
      onSelect(null);
    }

    setFilterValue(event.target.value);
  };

  return (
    <div className={autocompleteStyle}>
      <InputGroup>
        <InputAddonLeft>
          <InputAddonIcon>
            <MagnifierIcon />
          </InputAddonIcon>
        </InputAddonLeft>
        <Input
          isInvalid={isInvalid}
          onBlur={(event) =>
            setTimeout(() => {
              if (onBlur) {
                onBlur(event);
              }
              setIsFocused(false);
            }, 300)
          }
          onFocus={(event) => {
            if (onFocus) {
              onFocus(event);
            }
            setIsFocused(true);
          }}
          onChange={handleChange}
          placeholder={placeholder}
          type="search"
          value={filterValue}
        />
        {isFocused && (
          <div className={autocompleteListStyle}>
            <ListBox visibleItems={6}>
              {list.map((item) => (
                <ListBoxOption
                  onSelect={handleSelect}
                  key={item.id}
                  {...item}
                />
              ))}
            </ListBox>
          </div>
        )}
      </InputGroup>
    </div>
  );
}
