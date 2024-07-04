import {SlideLayout} from "spectacle";
import ResponsiveText from "../shared/ResponsiveText";

function EndToEnd() {
    return (
        <SlideLayout.Center backgroundColor="primary">
            <ResponsiveText color="tertiary" textAlign="center">
                As a full-stack developer, I like to <strong>solve business challenges with end-to-end solutions</strong>. 
                I’m comfortable taking on various roles as needed.
            </ResponsiveText>
            <ResponsiveText color="tertiary" textAlign="center">
                I enjoy designing user experiences, planning architectures, coding, and testing to ensure everything works well.
            </ResponsiveText>
            <ResponsiveText color="tertiary" textAlign="center">
                If you have a business problem, I’d love to work together to find a solution.
            </ResponsiveText>
            <ResponsiveText color="#AAAAAA"  textAlign="center" style={{fontSize: 'small'}}>
                Psst... I have some wonderful colleagues who can pitch in if your project requires extra hands.
            </ResponsiveText>
        </SlideLayout.Center>
    );
}

export default EndToEnd;