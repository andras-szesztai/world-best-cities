import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const Subtitle = styled.h2`
    text-transform: capitalize;
    line-height: 1.9;
    font-size: ${designTokens.fontSize.md};
    margin: 0;
    font-weight: ${designTokens.fontWeight.regular};

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        line-height: 1.4;
    }
`

export default Subtitle
