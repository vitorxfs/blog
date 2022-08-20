import { useCallback } from 'react';

export interface UseLocalStorageProps {
  getValue: (key: string) => string | null;
  setValue: (key:string, value: string) => void;
}

const useLocalStorage = (): UseLocalStorageProps => {
  const getValue = useCallback((key: string): string | null => {
    return localStorage.getItem(key);
  }, []);

  const setValue = useCallback((key: string, value: string): void => {
    return localStorage.setItem(key, value);
  }, []);

  return {
    getValue,
    setValue
  };
};

export default useLocalStorage;
