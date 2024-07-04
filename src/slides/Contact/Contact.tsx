import ResponsiveText from "../../shared/ResponsiveText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FlexBox, Image, SlideLayout } from "spectacle";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <SlideLayout.Center backgroundColor="primary">
            <FlexBox flexDirection="column" className={styles.content}>
                <ResponsiveText color="tertiary" textAlign="center">
                    You just had a sneak peek about what I can do and how I think about software development.
                </ResponsiveText>
                <ResponsiveText color="tertiary" fontWeight="bold" textAlign="center">
                    If you believe I can help you with your project, please don't hesitate to contact me!
                </ResponsiveText>
                <a className={styles.link}
                    href="https://www.linkedin.com/in/fernando-barbat-b4162256" target="_blank">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />&nbsp;Contact me through my LinkedIn profile here.
                </a>
                <ResponsiveText color="tertiary" style={{ marginTop: 45 }}>
                    Fernando
                </ResponsiveText>
                <a href="https://www.linkedin.com/in/fernando-barbat-b4162256" target="_blank">
                    <FontAwesomeIcon color="#0270ad" size="lg" icon={faLinkedin} />
                </a>
            </FlexBox>

            <Image className={styles.xkcd} src="https://imgs.xkcd.com/comics/pointers.png" />
        </SlideLayout.Center>
    );
}

export default Contact;