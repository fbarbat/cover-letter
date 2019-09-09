import React from 'react';

import createTheme from 'spectacle/lib/themes/default';

import {Deck} from 'spectacle';
import './Presentation.css';

import useGoogleAnalytics from "./useGoogleAnalytics";
import Hello from "./slides/Hello";
import BlowingMyOwnHorn from "./slides/BlowingMyOwnHorn/BlowingMyOwnHorn";
import Experience from "./slides/Experience";
import Business from "./slides/Business/Business";
import IDontKnow from "./slides/IDontKnow";
import Learning from "./slides/Learning";
import EndToEnd from "./slides/EndToEnd";
import Frontend from "./slides/Frontend/Frontend";
import Backend from "./slides/Backend";
import Contact from "./slides/Contact/Contact";

const theme = createTheme(
    {
        primary: '#FFFFFF',
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
        <Deck theme={theme}>
            <Hello/>
            <BlowingMyOwnHorn/>
            <Experience transition={['spin']}/>
            <Business transition={['fade']}/>
            <IDontKnow transition={['zoom']}/>
            <Learning transition={['slide']}/>
            <EndToEnd transition={['spin']}/>
            <Frontend transition={['slide']}/>
            <Backend transition={['fade']}/>
            <Contact transition={['zoom']}/>
        </Deck>
    );
}

export default Presentation;