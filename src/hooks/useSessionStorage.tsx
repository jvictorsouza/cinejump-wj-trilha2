import useStorage from "./useStorage";

const useSessionStorage = (key: string, initialValue: any) => {
  return useStorage(window.sessionStorage, key, initialValue);
};

export default useSessionStorage;
