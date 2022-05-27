import { useEffect, useRef } from 'react';

export function useOnLoad(callback) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (!firstRenderRef.current) {
      return;
    }

    firstRenderRef.current = false;
    callback();
  }, [callback]);
}

export function useCheckbox({ checked, indeterminate }) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.checked = checked;
    ref.current.indeterminate = indeterminate;
  }, [checked, indeterminate]);

  return ref;
}
