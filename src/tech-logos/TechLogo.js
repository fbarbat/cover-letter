import React, {useState} from 'react';
import style from './TechLogo.module.css'

function TechLogo(props) {
    const [loaded, setLoaded] = useState(false);

    return <img src={props.url} alt=""
                className={style.techLogo + (loaded ? ' ' + style.techLogoLoaded : '')}
                style={{
                    width: props.width,
                    height: props.height
                }}
                onLoad={() => setLoaded(true)}
    />
}

export default TechLogo;