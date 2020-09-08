import { useEffect, useRef } from 'react';

export const useUpdate = (fn: () => void, deps: any[]) => {
    let count = useRef(0);
    useEffect(() => {
        count.current += 1;
    });
    useEffect(() => {
        if ( count.current > 1 ) {
            fn();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};
