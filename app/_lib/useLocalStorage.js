import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const isClient = typeof window !== "undefined";

  const [value, setValue] = useState(() => {
    if (isClient) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } else {
      return initialState;
    }
  });

  const setStoredValue = (newValue) => {
    if (isClient) {
      try {
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
      } catch (error) {
        console.error("Failed to store value in localStorage", error);
      }
    }
  };

  useEffect(() => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key, isClient]);

  return [value, setStoredValue];
}
