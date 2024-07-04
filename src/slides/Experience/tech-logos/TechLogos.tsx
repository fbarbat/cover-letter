import { useState, useEffect } from 'react';
import TechLogo from "./TechLogo";
import useWindowInnerSize from '../../../shared/useWindowInnerSize';

type Size = {
    width: number
    height: number
}

function extractSizes(imageNames: string[]): Map<string, Size> {
    return imageNames.reduce((result, imageName) => {
        const split = imageName.split('_');
        const widthXheightDotExtension = split[split.length - 1];
        const widthXheight = widthXheightDotExtension.split('.')[0];
        const [width, height] = widthXheight.split('x');
        result.set(imageName, { width: Number(width), height: Number(height) });
        return result;
    }, new Map<string, Size>());
}

function computeTotalImagePixels(sizes: Map<string, Size>) {
    return Array(...sizes.values())
        .reduce((accumulator, current) => accumulator + current.width * current.height, 0);
}

const context = import.meta.glob('./normalized/*', {eager: true, import: 'default'})

const imageNames = Object.keys(context)
shuffle(imageNames);
const originalSizes = extractSizes(imageNames);
const totalImagePixels = computeTotalImagePixels(originalSizes);

function shuffle<T>(a: T[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function images(ratio: number) {
    return imageNames.map(imageName => {
        const url = context[imageName] as string;
        const { width, height } = originalSizes.get(imageName) ?? { width: 0, height: 0};
        return (
            <div key={imageName} style={{ display: 'inline-block', padding: '5px', verticalAlign: 'middle' }}>
                <TechLogo url={url} width={width * ratio} height={height * ratio} />
            </div>
        );
    });
}

function getRatio(windowInnerSize: Size) {
    const totalPixels = windowInnerSize.width * windowInnerSize.height;
    return (totalPixels / totalImagePixels * 0.5) ** 0.5;
}

function TechLogos() {
    const windowInnerSize = useWindowInnerSize()

    const [ratio, setRatio] = useState(getRatio(windowInnerSize));

    useEffect(() => {
        setRatio(getRatio(windowInnerSize));
    }, [windowInnerSize]);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, textAlign: 'center' }}>
            {images(ratio)}
        </div>
    );
}

export default TechLogos;