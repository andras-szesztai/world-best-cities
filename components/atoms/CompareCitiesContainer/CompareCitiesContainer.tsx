import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const CompareCitiesContainer = styled.div`
    max-height: ${designTokens.space['4xl']}px;
    overflow-y: auto;
    display: grid;
    grid-template-columns: 1fr;
    border: ${designTokens.strokeWidth.lg}px solid ${designTokens.color.black};
    border-radius: ${designTokens.borderRadius.lg}px;
    padding: ${designTokens.space.xs}px;
    gap: ${designTokens.space.sm}px;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        padding: ${designTokens.space.base}px;
        gap: ${designTokens.space.base}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        padding: ${designTokens.space.md}px;
        gap: ${designTokens.space.md}px;
        max-height: ${designTokens.space['5xl']}px;
    }
`

export default CompareCitiesContainer
