import React from 'react';
import {Slide} from "spectacle";
import styles from "./Hello.module.css";
import BackgroundAnimation from "./background-animation";
import HelloAnimation from "./hello-animation";
import StyledText from "../../shared/StyledText";

function Hello() {
    return (
        <Slide>
            <BackgroundAnimation/>
            <div className={styles.content}>
                <HelloAnimation/>
                <div className={styles.afterHello}>
                    <StyledText textColor="primary" fit bold>
                        I am Fernando.
                    </StyledText>
                    <StyledText textColor="#333333" fit bold>
                        Nice to meet you!
                    </StyledText>
                    <StyledText textColor="#DDDDDD" fit bold>
                        I am a full-stack software engineer and this is my cover letter.
                    </StyledText>
                </div>
            </div>
        </Slide>
    );
}

export default Hello;