import { useRef } from 'react';

function useIsFirstRender (): boolean {
  const isFirstRender = useRef(true);

  if (isFirstRender.current) {
    isFirstRender.current = false;

    return true;
  }

  return isFirstRender.current;
}

export default useIsFirstRender;
