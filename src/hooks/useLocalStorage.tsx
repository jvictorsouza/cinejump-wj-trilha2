import useStorage from "./useStorage";

const useLocalStorage = (key: string, initialValue: any) => {
  return useStorage(window.localStorage, key, initialValue);
};

export default useLocalStorage;
