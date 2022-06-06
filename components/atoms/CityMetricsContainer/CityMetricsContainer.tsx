import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const CityMetricsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${designTokens.space.md}px;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        gap: ${designTokens.space.lg}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        justify-content: center;
        grid-template-columns: repeat(2, minmax(min-content, 600px));
    }
`

export default CityMetricsContainer
