import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${designTokens.space.base}px;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        gap: ${designTokens.space.md}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.lg}px) {
        gap: ${designTokens.space.lg}px;
    }
`

export default Container
