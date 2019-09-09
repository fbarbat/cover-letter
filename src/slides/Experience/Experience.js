import React from 'react';
import TechLogos from "./tech-logos/TechLogos";
import StyledText from "../../shared/StyledText";
import styles from "./Experience.module.css";
import {Slide} from "spectacle";

function Experience() {
    return (
        <Slide bgColor="primary">
            <TechLogos/>
            <StyledText className={styles.experience} textColor="tertiary">
                I have <strong>10 years of experience in software development</strong>,<br/>
                but I am <strong>continuously learning</strong>!
            </StyledText>
        </Slide>
    );
}

export default Experience;