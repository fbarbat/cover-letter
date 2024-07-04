import { SlideLayout } from "spectacle";
import ResponsiveText from "../shared/ResponsiveText";

function IDontKnow() {
    return (
        <SlideLayout.Center backgroundColor="tertiary">
            <ResponsiveText color="primary" textAlign="center">
                I say <em>"I don't know"</em> frequently but I also say <em>"I will investigate and find a way"</em>.
            </ResponsiveText>
            <ResponsiveText color="primary" textAlign="center">
                Software development is like that.<br /><strong>Nobody knows everything.</strong>
            </ResponsiveText>
            <ResponsiveText color="primary" textAlign="center">
                Experts need to Google/LLM a lot, even though some people don't talk about it often.
            </ResponsiveText>
        </SlideLayout.Center>
    );
}

export default IDontKnow;