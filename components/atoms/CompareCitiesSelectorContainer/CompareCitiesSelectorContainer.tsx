import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const CompareCitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: ${designTokens.space.sm}px;
    bottom: 0px;
    width: 100%;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        gap: ${designTokens.space.base}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        gap: ${designTokens.space.md}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.lg}px) {
        gap: ${designTokens.space.lg}px;
    }
`

export default CompareCitiesContainer
