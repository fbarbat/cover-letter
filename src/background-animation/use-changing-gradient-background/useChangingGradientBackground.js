import Color from "./Color";
import Gradient from "./Gradient";
import ChangingGradientBackgroundController from "./ChangingGradientBackgroundController";

import {useRef, useEffect} from 'react';

const colors = [
    new Color(62, 35, 255),
    new Color(60, 255, 60),
    new Color(255, 35, 98),
    new Color(45, 175, 230),
    new Color(255, 0, 255),
    new Color(255, 128, 0)
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function randomGradientGenerator() {
    return new Gradient(getRandomColor(), getRandomColor(), Math.floor(Math.random() * 360));
}

function useChangingGradientBackground() {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const changingGradientBackgroundController = new ChangingGradientBackgroundController(
                ref.current,
                randomGradientGenerator,
                5,
                20
            );

            return changingGradientBackgroundController.bind();
        }
    });

    return ref;
}

export default useChangingGradientBackground;