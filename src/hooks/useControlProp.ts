import { useEffect, useState } from 'react';
import { ControlPropsValue, ControlPropsReturn } from './useControlProp.types';

export function useControlProp(controlValue: ControlPropsValue = ''): ControlPropsReturn {
  const [value, setValue] = useState(controlValue);

  // We need to keep the state value in sync with the control prop.
  useEffect(() => {
    if (value !== controlValue) {
      setValue(controlValue);
    }
  }, [controlValue])

  return [value, setValue];
};