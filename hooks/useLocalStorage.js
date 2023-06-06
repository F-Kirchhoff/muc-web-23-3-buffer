import { useEffect, useState } from "react";

export default function useLocalStorage(storageName, defaultValue) {
  const [state, _setState] = useState(defaultValue);

  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem(storageName)));
  }, [storageName]);

  function setState(newValue) {
    if (typeof window === "undefined") {
      _setState(newValue);
      return;
    }
    window.localStorage.setItem(storageName, JSON.stringify(newValue));
    _setState(newValue);
  }

  return [state, setState];
}

// export default function useLocalStorage(storageName, defaultValue) {
//   const [state, setState] = useState(() => {
//     if (typeof window === "undefined") {
//       return defaultValue;
//     }

//     return window.localStorage.getItem(storageName);
//   });

//   useEffect(() => {
//     try {
//       window.localStorage.setItem(storageName, state);
//     } catch (error) {
//       console.log(error);
//     }
//   }, [state, setState, storageName]);

//   return [state, setState];
// }
