import React from 'react';
import {Slide, List, ListItem} from "spectacle";
import BackgroundVideo from "./BackgroundVideo";
import StyledText from "../../shared/StyledText";
import styles from "./Business.module.css";

function Business() {
    return (
        <Slide bgColor="secondary">
            <BackgroundVideo/>
            <StyledText textColor="tertiary" fit bold>
                I have worked for start-ups and big enterprises.<br/>Just to name a few:<br/>
            </StyledText>
            <List className={styles.business} textColor="tertiary">
                <ListItem>Direct Manipulation UI controls for the health industry</ListItem>
                <ListItem>Geographic Information Systems for agriculture</ListItem>
                <ListItem>Embedded software for cash registers</ListItem>
                <ListItem>Single Page Applications and billing systems for retailers</ListItem>
                <ListItem>Billing systems for telecom companies</ListItem>
            </List>
        </Slide>
    );
}

export default Business;
