const storageAvailable = (() => {
  try {
    return typeof window !== "undefined" && !!window.localStorage;
  } catch {
    return false;
  }
})();

export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  if (!storageAvailable) return defaultValue;
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return defaultValue;
    return JSON.parse(stored) as T;
  } catch (e) {
    if (import.meta.env.DEV)
      console.warn(`getLocalStorage("${key}") failed`, e);
    return defaultValue;
  }
};

export const setLocalStorage = <T>(key: string, value: T): void => {
  if (!storageAvailable) return;
  try {
    if (value === undefined) {
      localStorage.removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    if (import.meta.env.DEV)
      console.warn(`setLocalStorage("${key}") failed`, e);
  }
};

export const removeLocalStorage = (key: string): void => {
  if (!storageAvailable) return;
  try {
    localStorage.removeItem(key);
  } catch (e) {
    if (import.meta.env.DEV)
      console.warn(`removeLocalStorage("${key}") failed`, e);
  }
};
