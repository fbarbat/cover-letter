import React from 'react';
import ResponsiveText from "../../shared/ResponsiveText";
import {OutboundLink} from "react-ga";
import ChartExample from "./ChartExample";
import {Slide} from "spectacle";

function Frontend() {
    return (
        <Slide bgColor="tertiary">
            <ResponsiveText textColor="primary">
                I enjoy implementing good-looking user interfaces and great user experiences. <strong>User-centered
                design</strong> and <strong>usability testing</strong> are the way to go.
            </ResponsiveText>
            <ResponsiveText textColor="primary">
                This cover letter was implemented using <strong>React</strong>. You can check the code here:
                &nbsp;
                <OutboundLink target="_blank" to="https://github.com/fbarbat/cover-letter"
                              eventLabel="github_repository_click">https://github.com/fbarbat/cover-letter</OutboundLink>
            </ResponsiveText>
            <ChartExample/>
        </Slide>
    );
}

export default Frontend;