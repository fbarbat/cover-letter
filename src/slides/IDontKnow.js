import React from 'react';
import {Slide} from "spectacle";
import ResponsiveText from "../shared/ResponsiveText";

function IDontKnow() {
    return (
        <Slide bgColor="tertiary">
            <ResponsiveText textColor="primary">
                I say <em>"I don't know"</em> frequently but I also say <em>"I will investigate and find a way"</em>.
            </ResponsiveText>
            <ResponsiveText textColor="primary">
                Software development is like that.<br/><strong>Nobody knows everything.</strong>
            </ResponsiveText>
            <ResponsiveText textColor="primary">
                Experts need to google a lot, even though some people don't like to talk about it.
            </ResponsiveText>
        </Slide>
    );
}

export default IDontKnow;