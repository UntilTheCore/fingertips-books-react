import { useEffect, useRef } from "react";

const useUpdate = (fn: () => void, deps: any[]) => {
  const count = useRef(0);
  const [..._deps] = deps;

  useEffect(() => {
    count.current++;
  })

  useEffect(() => {
    if (count.current > 1) {
      console.log('set tags');
      fn();
    }
  }, [fn, _deps]);
}

export { useUpdate };