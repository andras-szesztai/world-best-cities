import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const LayoutContainer = styled.div`
    padding: ${designTokens.space.sm}px;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        padding: ${designTokens.space.base}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        padding: ${designTokens.space.md}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.lg}px) {
        padding: ${designTokens.space.lg}px;
    }
`

export default LayoutContainer
