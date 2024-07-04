import { useCallback, MutableRefObject } from 'react';

//https://github.com/facebook/react/issues/13029
/**
 * Combines many refs into one. Useful for combining many ref hooks
 */
export default function useCombinedRefs<T>(...refs: MutableRefObject<T>[]) {
    return useCallback(
        (value: T) =>
            refs.forEach(ref => {
                if (ref) {
                    if (ref instanceof Function) {
                        ref(value);
                    } else {
                        ref.current = value;
                    }
                }
            }),
        // eslint-disable-next-line
        refs
    )
}
