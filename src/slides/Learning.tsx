import { SlideLayout } from "spectacle";
import ResponsiveText from "../shared/ResponsiveText";

function Learning() {
    return (
        <SlideLayout.Center backgroundColor="secondary">
            <ResponsiveText color="tertiary">
                I am the kind of person who enjoys learning as he goes. Given a specific problem to
                solve, I try to find the best tool and practices <strong>at that specific time</strong>.
            </ResponsiveText>
            <ResponsiveText color="tertiary">
                I believe in <strong>slowing down to go faster</strong>. I focus on having a bigger
                impact on the long run without neglecting the short term. I've learned that this trade off is very context-specific though.
            </ResponsiveText>
        </SlideLayout.Center>
    );
}

export default Learning;