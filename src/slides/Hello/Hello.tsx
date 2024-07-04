import { FlexBox, Slide } from "spectacle";
import styles from "./Hello.module.css";
import BackgroundAnimation from "./background-animation";
import HelloAnimation from "./hello-animation";
import { Textfit } from 'react-textfit';
import useWindowInnerSize from '../../shared/useWindowInnerSize';

const textfitAttributes = {
    min: 14,
    max: 200,
}

function Hello() {
    const windowInnerSize = useWindowInnerSize()

    return (
        <Slide>
            <BackgroundAnimation />

            <FlexBox width="100%" height="100%" justifyContent="center" alignItems="center">
                <FlexBox flexDirection="column" justifyContent="center" alignItems="stretch" className={styles.content}>
                    <HelloAnimation className={styles.helloAnimation} />

                    <Textfit {...textfitAttributes} mode="single" className={styles.afterHello + ' ' + styles.iAmFernando} >
                        I am Fernando.
                    </Textfit>

                    <Textfit {...textfitAttributes} mode="single" className={styles.afterHello + ' ' + styles.niceToMeetYou}>
                        Nice to meet you!
                    </Textfit>

                    <Textfit {...{ ...textfitAttributes, mode: windowInnerSize.width < 768 ? "multi" : "single" }} className={styles.afterHello + ' ' + styles.sofwareEngineer}>
                        I am a full-stack software engineer and this is my cover letter.
                    </Textfit>
                </FlexBox>
            </FlexBox>
        </Slide >
    );
}

export default Hello;