import { Slide, UnorderedList, ListItem, FlexBox } from "spectacle";
import BackgroundVideo from "./BackgroundVideo";
import styles from "./Business.module.css";
import ResponsiveText from '../../shared/ResponsiveText';
import { fadeTransition } from 'spectacle';

function Business() {
    return (
        <Slide backgroundColor="secondary" transition={fadeTransition}>
            <BackgroundVideo />
            <FlexBox justifyContent="center" alignItems="center" height="100%">
                <FlexBox flexDirection="column" alignItems="left" height="100%">
                    <ResponsiveText color="tertiary" fontStyle="italic">
                        I have worked for start-ups and big companies:
                    </ResponsiveText>

                    <UnorderedList className={styles.business} color="tertiary">
                        <ListItem>Direct Manipulation UI controls for the health industry</ListItem>
                        <ListItem>Geographic Information Systems for agriculture</ListItem>
                        <ListItem>Embedded software for cash registers</ListItem>
                        <ListItem>Single Page Applications and billing systems for retailers</ListItem>
                        <ListItem>Billing systems for telecom companies</ListItem>
                        <ListItem>A real-time video application to make remote work better</ListItem>
                    </UnorderedList>

                    <ResponsiveText color="tertiary" fontWeight="bold">
                        I just like to work in cool stuff!
                    </ResponsiveText>
                </FlexBox>
            </FlexBox>
        </Slide>
    );
}

export default Business;
