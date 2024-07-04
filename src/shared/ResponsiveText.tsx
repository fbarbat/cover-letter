import styled from "@emotion/styled";
import { Text } from "spectacle";

const ResponsiveText = styled(Text)`
@media (max-width: 768px) {
    font-size: medium;
}`;

export default ResponsiveText;
