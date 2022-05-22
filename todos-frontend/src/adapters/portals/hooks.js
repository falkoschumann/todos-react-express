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
