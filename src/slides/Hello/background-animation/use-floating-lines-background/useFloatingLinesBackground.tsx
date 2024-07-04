import {useRef, useEffect} from 'react';
import createFloatingLinesBackgroundController from "./createFloatingLinesBackgroundController";

const floatingLinesBackgroundController = createFloatingLinesBackgroundController();

function useFloatingLinesBackground() {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ref.current) {
            floatingLinesBackgroundController.bind(ref.current);
            return floatingLinesBackgroundController.release;
        }
    });

    return ref;
}

export default useFloatingLinesBackground;