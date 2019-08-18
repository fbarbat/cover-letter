import React from 'react';
import styles from './BackgroundVideo.module.css'

function BackgroundVideo() {
    return (
        <div style={{position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, zIndex: 0}}>
            <video className={styles.video} loop autoPlay>
                <source src={process.env.PUBLIC_URL + '/background-video/typing.mp4'} type="video/mp4"/>
            </video>
        </div>
    );
}

export default BackgroundVideo;