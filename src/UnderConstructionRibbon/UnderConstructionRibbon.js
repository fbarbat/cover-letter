import React, {useState, useEffect} from 'react'
import underConstruction from "./under-construction.png";

function getDimensions() {
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    };
}

function UnderConstructionRibbon() {
    const [dimensions, setDimensions] = useState(getDimensions());

    let underConstructionWidth = dimensions.width * 0.1;
    if (underConstructionWidth < 80) {
        underConstructionWidth = 80;
    }

    const underConstructionHeight = underConstructionWidth * 0.9;

    function updateDimensions() {
        setDimensions(getDimensions());
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    });

    return (
        <img src={underConstruction} alt="Under construction"
             style={{
                 position: 'fixed',
                 top: '15px',
                 right: '15px',
                 zIndex: 100,
                 width: underConstructionWidth,
                 height: underConstructionHeight,
             }}/>
    );
}

export default UnderConstructionRibbon;