import { useState, useEffect } from 'react';

export const getStorageValue = <T>(key: string, defaultValue: T): T => {
  const saved = localStorage.getItem(key);

  if (saved) {
    const initial = JSON.parse(saved) as T;
    return initial || defaultValue;
  }

  return defaultValue;
};

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(getStorageValue<T>(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
