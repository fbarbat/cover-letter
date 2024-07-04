import { Deck } from 'spectacle';
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
import useFullWindowTheme from './useFullWindowTheme';
import { Template } from './Template';
import TalentAgent from './slides/TalentAgent/TalentAgent';
import RecentExperience from './slides/RecentExperience/RecentExperience';

function Presentation() {
    const theme = useFullWindowTheme();

    return (
        <Deck theme={theme} template={<Template />}>
            <Hello />
            <BlowingMyOwnHorn />
            <Experience />
            <RecentExperience />
            <Business />
            <IDontKnow />
            <Learning />
            <EndToEnd />
            <Frontend />
            <Backend />
            <TalentAgent />
            <Contact />
        </Deck>
    );
}

export default Presentation;