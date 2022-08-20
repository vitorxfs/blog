import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';

import useLocalStorage from '../../src/common/hooks/useLocalStorage';

describe('useLocalStorage', () => {
  it('returns null when trying to get a key that is not set', () => {
    const { result } = renderHook(() => useLocalStorage());

    const { getValue } = result.current;

    const value = getValue('nonExistingKey');

    expect(value).toBe(null);
  });

  it('sets and gets value correctly', () => {
    const { result } = renderHook(() => useLocalStorage());
    const { getValue, setValue } = result.current;

    const KEY = 'validKey';
    const VALUE = 'value';

    setValue(KEY, VALUE);

    expect(getValue(KEY)).toBe(VALUE);
  });
});
