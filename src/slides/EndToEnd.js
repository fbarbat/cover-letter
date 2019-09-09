import React from 'react';
import {Slide} from "spectacle";
import ResponsiveText from "../shared/ResponsiveText";

function EndToEnd() {
    return (
        <Slide bgColor="primary">
            <ResponsiveText textColor="tertiary">As a full-stack developer, I like to provide <strong>end-to-end
                solutions to business problems</strong>. But I will be glad to help in whatever I can!</ResponsiveText>
            <ResponsiveText textColor="tertiary">I enjoy designing the user experience, defining the architecture,
                implementing the code and testing it.</ResponsiveText>
            <ResponsiveText textColor="tertiary">Just tell me the business problem and we can pair together to bring
                solutions to it.</ResponsiveText>
            <ResponsiveText textColor="#AAAAAA" style={{fontSize: 'small'}}>
                Psst... I have many colleagues who can also help so let me know if you have a big project.
            </ResponsiveText>
        </Slide>
    );
}

export default EndToEnd;