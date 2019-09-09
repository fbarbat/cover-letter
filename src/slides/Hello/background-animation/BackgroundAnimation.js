import React from 'react';
import useCombinedRefs from '../../../shared/useCombinedRefs'
import useChangingGradientBackground from './use-changing-gradient-background';
import useFloatingLinesBackground from "./use-floating-lines-background";

export default function BackgroundAnimation() {
    const container = useCombinedRefs(
        useChangingGradientBackground(),
        useFloatingLinesBackground()
    );
    return <div ref={container} style={{position: 'fixed', left: 0, top: 0, right: 0, bottom: 0}}/>;
}
