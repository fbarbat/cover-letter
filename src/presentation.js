import React from 'react';
import DraftRibbon from "./draft-ribbon";
import createTheme from 'spectacle/lib/themes/default';

import {
    Deck,
    Heading,
    ListItem,
    List,
    Image,
    Slide,
    Text
} from 'spectacle';

import BackgroundAnimation from './background-animation';
import TechLogos from "./tech-logos/TechLogos";
import BackgroundVideo from "./background-video";

import styles from "./presentation.module.css"
import useGoogleAnalytics from "./google-analytics/useGoogleAnalytics";
import ChartExample from "./chart-example/ChartExample";
import PingChart from "./ping-chart/PingChart";
import {OutboundLink} from "react-ga";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

const theme = createTheme(
    {
        primary: 'white',
        secondary: '#1F2022',
        tertiary: '#03A9FC',
        quaternary: '#CECECE',
    },
    {
        primary: 'Montserrat',
        secondary: 'Helvetica',
    }
);

function Presentation() {
    useGoogleAnalytics();
    return (
        <div>
            <Deck theme={theme}>
                <Slide>
                    <BackgroundAnimation/>
                    <div className={styles.slide1Content}>
                        <Heading size={1} fit caps textColor="primary">
                            Hello
                        </Heading>
                        <Text margin="10px 0 0" textColor="primary" fit bold>
                            I am Fernando.
                        </Text>
                        <Text margin="10px 0 0" textColor="#333333" fit bold>
                            Nice to meet you!
                        </Text>
                        <Text margin="10px 0 0" textColor="#DDDDDD" fit bold>
                            I am a full-stack developer and this is going to be my cover letter.
                        </Text>
                    </div>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Text textColor="quaternary">
                        I do not enjoy <em>blowing my own horn</em> but here we go...
                    </Text>
                </Slide>
                <Slide transition={['spin']} bgColor="primary">
                    <TechLogos/>
                    <Text className={styles.slide3Content} textColor="tertiary"
                          bgColor="rgba(255,255,255,0.8)" style={{
                        position: 'relative', zIndex: 1
                    }}>
                        I have <strong>10 years of experience in software development</strong>,<br/>
                        but I am <strong>continuously learning</strong>!
                    </Text>
                </Slide>
                <Slide transition={['fade']} bgColor="secondary">
                    <BackgroundVideo/>
                    <Text textColor="tertiary" fit bold>
                        I have worked for start-ups and big enterprises.<br/>Just to name a few:<br/>
                    </Text>
                    <List className={styles.slideBusinessList} style={{transform: 'scale(1)'}} textColor="tertiary">
                        <ListItem>Direct Manipulation UI controls for the health industry</ListItem>
                        <ListItem>Geographic Information Systems for agriculture</ListItem>
                        <ListItem>Embedded software for cash registers</ListItem>
                        <ListItem>Single Page Applications and billing systems for retailers</ListItem>
                        <ListItem>Billing systems for telecom companies</ListItem>
                    </List>
                </Slide>
                <Slide transition={['zoom']} bgColor="tertiary">
                    <Text className={styles.slideNobodyKnows} textColor="primary">
                        I say <em>"I don't know"</em> frequently but I also say <em>"I will investigate
                        and find a way"</em>.
                    </Text>
                    <Text className={styles.slideNobodyKnows} textColor="primary">
                        Software development is like that.<br/><strong>Nobody knows everything.</strong>
                    </Text>
                    <Text className={styles.slideNobodyKnows} textColor="primary">
                        Experts need to google a lot, even though some people don't like to talk about it.
                    </Text>
                </Slide>
                <Slide transition={['slide']} bgColor="secondary">
                    <Text className={styles.slideNobodyKnows} textColor="tertiary">
                        I am the kind of person who enjoys learning as he goes. Given a specific problem to
                        solve, I try to find the best tool and practices <strong>at that specific time</strong>.
                    </Text>
                    <Text className={styles.slideNobodyKnows} textColor="tertiary">
                        I believe in <strong>slowing down to go faster</strong>. I focus on having a bigger
                        impact on the long run without neglecting the short term.
                    </Text>
                </Slide>
                <Slide transition={['spin']} bgColor="primary">
                    <Text className={styles.slideNobodyKnows} textColor="tertiary">
                        As a full-stack developer, I like to provide <strong>end-to-end solutions to business
                        problems</strong>. But I will be glad to help in whatever I can.
                    </Text>
                    <Text className={styles.slideNobodyKnows} textColor="tertiary">
                        I enjoy designing the user experience, defining the architecture, implementing the code
                        and testing it.
                    </Text>
                    <Text className={styles.slideNobodyKnows} textColor="tertiary">
                        Just tell me the business problem and we can pair together to bring solutions to it.
                    </Text>

                    <Text className={styles.slideNobodyKnows} textColor="#AAAAAA" style={{fontSize: 'small'}}>
                        Psst... I have many colleagues who can also help so let me
                        know if you have a big project.
                    </Text>
                </Slide>
                <Slide transition={['slide']} bgColor="tertiary">
                    <Text className={styles.slideNobodyKnows} textColor="primary">
                        I enjoy implementing good-looking user interfaces and great user experiences. <strong>User-centered
                        design</strong> and <strong>usability testing</strong> are the way to go.
                    </Text>
                    <Text className={styles.slideNobodyKnows} textColor="primary">
                        This cover letter was implemented using
                        React. <span style={{textDecoration: 'line-through'}}>You can check the
                        code <strong>here</strong></span>. <br/>{'//TODO:'} Push it to GitHub :)

                    </Text>
                    <ChartExample/>
                </Slide>
                <Slide transition={['fade']} bgColor="secondary">
                    <Text textSize="1em" className={styles.slideNobodyKnows} textColor="primary" textAlign="left">
                        I have also worked on backend a lot. Maybe most of my career.
                    </Text>
                    <Text textSize="1em" className={styles.slideNobodyKnows} textColor="primary" textAlign="left">
                        Just as an example, this graph below is showing in real time latency to a Java (GraalVM)
                        Micronaut backend service deployed on a Kubernetes cluster on Google Cloud Platform.
                    </Text>
                    <Text textSize="1em" className={styles.slideNobodyKnows} textColor="primary" textAlign="left"
                          style={{marginBottom: '30px'}}>
                        <span style={{textDecoration: 'line-through'}}>See the code here</span> {'//TODO:'} implement
                        it :)
                    </Text>
                    <PingChart/>
                </Slide>
                <Slide transition={['fade']} bgColor="primary">
                    <Text className={styles.slideNobodyKnows} textColor="tertiary">
                        You just had a sneak peek about what I can do and how I think about software development.
                    </Text>
                    <Text className={styles.slideNobodyKnows} textColor="tertiary" bold>
                        If you believe I can help you with your project, please do not hesitate to contact me!
                    </Text>
                    <OutboundLink className={styles.slideNobodyKnows} style={{color: "#2836aa"}}
                                  eventLabel="contact_me_linkedin_click"
                                  to="https://www.linkedin.com/in/fernando-barbat-b4162256" target="_blank">
                        <FontAwesomeIcon icon={faExternalLinkAlt}/>
                        Contact me through my LinkedIn profile here.</OutboundLink>
                    <Text className={styles.slideNobodyKnows} textColor="tertiary" style={{marginTop: 45}}>
                        Fernando
                    </Text>
                    <OutboundLink
                        eventLabel="linkedin_icon_click"
                        to="https://www.linkedin.com/in/fernando-barbat-b4162256" target="_blank">
                        <FontAwesomeIcon color="#0270ad" size="lg" icon={faLinkedin}/>
                    </OutboundLink>
                    <Image className={styles.xkcd}
                           src="https://imgs.xkcd.com/comics/pointers.png" width={360} height={299}/>
                </Slide>
            </Deck>
            <DraftRibbon/>
        </div>
    );
}

export default Presentation;