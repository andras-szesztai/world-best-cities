import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

export const Container = styled.div`
    padding: 0 ${designTokens.space.sm}px;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        padding: 0 ${designTokens.space.md}px;
    }
`
