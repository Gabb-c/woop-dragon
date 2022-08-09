import { getStorageValue, useLocalStorage } from '../../hooks/useLocalStorage';
import { renderHook } from '@testing-library/react';

describe('UseLocalStorage', () => {
  it('should return storage value', () => {
    localStorage.setItem('test', JSON.stringify({ test: 'testValue' }));
    const value = getStorageValue('test', '');

    expect(value).toEqual({ test: 'testValue' });
  });

  it('should return default storage value', () => {
    localStorage.setItem('test', JSON.stringify({ test: 'testValue' }));
    const value = getStorageValue('tes', '');

    expect(value).toEqual('');
  });

  it('should return value and setValue', () => {
    localStorage.setItem('test', JSON.stringify({ test: 'testValue' }));

    const { result } = renderHook(() => useLocalStorage('test', ''));

    console.log(result.current);

    expect(result.current).toBeTruthy();
  });
});
