import { useEffect, useState } from "react";

export default function useNewLocalStorage(storageName, defaultValue) {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    const currentStorageValue = JSON.parse(
      window.localStorage.getItem(storageName)
    );
    setState(currentStorageValue);
  }, [storageName]);

  function realSetState(newValue) {
    window.localStorage.setItem(storageName, JSON.stringify(newValue));
    setState(newValue);
  }

  return [state, realSetState];
}
