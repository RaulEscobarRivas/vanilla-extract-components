import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export function MapControl({ map, position, children }) {
  const [div, setDiv] = useState(null);

  useEffect(() => {
    const divCurrent = document.createElement('div');
    const indexCurrent = map.controls[position].length;
    map.controls[position].push(divCurrent);

    setDiv(divCurrent);

    return () => {
      if (map.controls[position]) {
        map.controls[position].removeAt(indexCurrent);
      }
      if (divCurrent) {
        divCurrent.remove();
      }
    };
  }, []);

  return div ? ReactDOM.createPortal(children, div) : null;
};