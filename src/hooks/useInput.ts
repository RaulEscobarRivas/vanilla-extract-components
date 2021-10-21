import { useControlProp } from './useControlProp';
import {
  InputParams,
  InputReturn,
} from './useInput.types';

export function useInput(params: InputParams): InputReturn {
  const [value, setValue] = useControlProp(params.value);

  function handleChange(event) {
    setValue(event.target.value);

    // Notify the outside world about the change.
    if (params.onChange) {
      params.onChange(event);
    }
  }

  return [value, handleChange];
};