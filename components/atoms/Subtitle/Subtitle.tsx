import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const Subtitle = styled.h2<{ capitalize?: boolean }>`
    text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
    font-size: ${designTokens.fontSize.md};
    margin: 0;
    font-weight: ${designTokens.fontWeight.regular};
    line-height: 1.9;

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        line-height: 1.4;
    }
`

export default Subtitle
