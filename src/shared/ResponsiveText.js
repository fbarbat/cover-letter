import styled from "react-emotion";
import StyledText from "./StyledText";

const ResponsiveText = styled(StyledText)`
@media (max-width: 768px) {
    font-size: medium;
}`;

export default ResponsiveText;
