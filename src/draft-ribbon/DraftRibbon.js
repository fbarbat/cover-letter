import React, {useState, useEffect} from 'react'
import underConstruction from "./under-construction.png";
import draft from "./draft.png";

function getDimensions() {
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
    };
}

function DraftRibbon() {
    const [dimensions, setDimensions] = useState(getDimensions());

    let draftWidth = dimensions.width * 0.1;
    if (draftWidth < 100){
        draftWidth = 100;
    }

    const draftHeight = draftWidth * 0.39408867;
    const underConstructionWidth = draftWidth * 0.75;
    const underConstructionHeight = underConstructionWidth * 0.9;

    function updateDimensions() {
        setDimensions(getDimensions());
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    });

    return (
        <div style={{position: 'fixed', top: '15px', right: '15px', zIndex: 100}}>
            <div>
                <img src={draft} alt="Draft"
                     style={{
                         width: draftWidth,
                         height: draftHeight,
                     }}/>
            </div>
            <div>
                <img src={underConstruction} alt="Under construction"
                     style={{
                         marginTop: '15px',
                         width: underConstructionWidth,
                         height: underConstructionHeight,
                         float: 'right'
                     }}/>
            </div>
        </div>
    );
}

export default DraftRibbon;