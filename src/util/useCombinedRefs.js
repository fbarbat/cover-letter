import {useCallback} from 'react';

//https://github.com/facebook/react/issues/13029
/**
 * Combines many refs into one. Useful for combining many ref hooks
 */
function useCombinedRefs(...refs) {
    return useCallback(
        (value) =>
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

export default useCombinedRefs;

