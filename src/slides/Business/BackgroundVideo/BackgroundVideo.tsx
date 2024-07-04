import styles from './BackgroundVideo.module.css'
import typingMp4 from './typing.mp4'

function BackgroundVideo() {
    return (
        <div style={{ position: 'fixed', left: 0, top: 0, right: 0, bottom: 0, zIndex: -1 }}>
            <video className={styles.video} playsInline autoPlay muted loop>
                <source src={typingMp4} type="video/mp4" />
            </video>
        </div>
    );
}

export default BackgroundVideo;