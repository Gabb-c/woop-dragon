import { useState, useEffect } from 'react';

const getStorageValue = <T>(key: string, defaultValue: T): T => {
  // getting stored value
  const saved = localStorage.getItem(key);

  if (saved) {
    const initial = JSON.parse(saved) as T;
    return initial || defaultValue;
  }

  return defaultValue;
};

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState(() => {
    return getStorageValue<T>(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
