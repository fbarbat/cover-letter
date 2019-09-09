import React, {useState, useEffect} from 'react';
import TechLogo from "./TechLogo";

function extractSizes(imageNames) {
    return imageNames.reduce((result, imageName) => {
        const split = imageName.split('_');
        const widthXheightDotExtension = split[split.length - 1];
        const widthXheight = widthXheightDotExtension.split('.')[0];
        const [width, height] = widthXheight.split('x');
        result[imageName] = {width: Number(width), height: Number(height)};
        return result;
    }, {});
}

function computeTotalImagePixels(sizes) {
    return Object.keys(sizes)
        .map(key => sizes[key])
        .reduce((accumulator, current) => accumulator + current.width * current.height, 0);
}

const context = require.context('./normalized');

const imageNames = context.keys();
shuffle(imageNames);
const originalSizes = extractSizes(imageNames);
const totalImagePixels = computeTotalImagePixels(originalSizes);

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function images(ratio) {
    return imageNames.map(imageName => {
        const url = context(imageName);
        const {width, height} = originalSizes[imageName];
        return (
            <div key={imageName} style={{display: 'inline-block', padding: '5px', verticalAlign: 'middle'}}>
                <TechLogo url={url} width={width * ratio} height={height * ratio}/>
            </div>
        );
    });
}

function getRatio() {
    const totalPixels = document.body.clientWidth * document.body.clientHeight;
    return (totalPixels / totalImagePixels * 0.5) ** 0.5;
}

function TechLogos() {
    const [ratio, setRatio] = useState(null);

    function updateRatio() {
        setRatio(getRatio());
    }

    useEffect(() => {
        updateRatio();
        window.addEventListener("resize", updateRatio);
        return () => window.removeEventListener("resize", updateRatio);
    });

    return (
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
            {ratio && images(ratio)}
        </div>
    );
}

export default TechLogos;