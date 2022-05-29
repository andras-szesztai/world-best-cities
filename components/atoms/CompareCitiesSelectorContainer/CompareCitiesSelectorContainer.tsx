import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const CompareCitiesContainer = styled.div`
    position: fixed;
    bottom: ${designTokens.space.sm}px;
    width: calc(100% - ${2 * designTokens.space.sm}px);

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        bottom: ${designTokens.space.base}px;
        width: calc(100% - ${2 * designTokens.space.base}px);
    }

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
    }

    @media only screen and (min-width: ${designTokens.breakPoints.lg}px) {
    }
`

export default CompareCitiesContainer
