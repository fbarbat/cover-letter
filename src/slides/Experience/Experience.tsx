import TechLogos from "./tech-logos/TechLogos";
import styles from "./Experience.module.css";
import { FlexBox, Slide } from "spectacle";
import ResponsiveText from '../../shared/ResponsiveText';
import { fadeTransition } from "spectacle";

export default function Experience() {
    return (
        <Slide backgroundColor="white" transition={fadeTransition}>
            <TechLogos />
            <FlexBox justifyContent="center" alignItems="center" height="100%">
                <ResponsiveText className={styles.experience} color="tertiary" textAlign="center">
                    I have <strong>14 years of experience in software development</strong>,<br />
                    but I'm <strong>continuously learning</strong>!
                </ResponsiveText>
            </FlexBox>
        </Slide >
    )
}