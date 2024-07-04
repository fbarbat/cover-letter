import ResponsiveText from "../../shared/ResponsiveText";
import { FlexBox, SlideLayout } from "spectacle";

function Frontend() {
    return (
        <SlideLayout.Center backgroundColor="tertiary">
            <FlexBox flexDirection="column">
                <ResponsiveText color="primary">
                    I enjoy implementing good-looking user interfaces and great user experiences. <strong>User-centered
                        design</strong> and <strong>usability testing</strong> are the way to go.
                </ResponsiveText>
                <ResponsiveText color="primary">
                    This cover letter was implemented using <strong>React</strong>. You can check the code here:
                    &nbsp;
                    <a target="_blank" href="https://github.com/fbarbat/cover-letter">https://github.com/fbarbat/cover-letter</a>
                </ResponsiveText>
            </FlexBox>
        </SlideLayout.Center>
    );
}

export default Frontend;