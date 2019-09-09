import React from 'react';
import ResponsiveText from "../../shared/ResponsiveText";
import {OutboundLink} from "react-ga";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Image, Slide} from "spectacle";
import styles from "./Contact.module.css";

function Contact(){
    return (
        <Slide bgColor="primary">
            <ResponsiveText  textColor="tertiary">
                You just had a sneak peek about what I can do and how I think about software development.
            </ResponsiveText>
            <ResponsiveText  textColor="tertiary" bold>
                If you believe I can help you with your project, please do not hesitate to contact me!
            </ResponsiveText>
            <OutboundLink className={styles.link}
                           eventLabel="contact_me_linkedin_click"
                           to="https://www.linkedin.com/in/fernando-barbat-b4162256" target="_blank">
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
                Contact me through my LinkedIn profile here.</OutboundLink>
            <ResponsiveText textColor="tertiary" style={{marginTop: 45}}>
                Fernando
            </ResponsiveText>
            <OutboundLink
                eventLabel="linkedin_icon_click"
                to="https://www.linkedin.com/in/fernando-barbat-b4162256" target="_blank">
                <FontAwesomeIcon color="#0270ad" size="lg" icon={faLinkedin}/>
            </OutboundLink>
            <Image className={styles.xkcd} src="https://imgs.xkcd.com/comics/pointers.png"/>
        </Slide>
    );
}

export default Contact;