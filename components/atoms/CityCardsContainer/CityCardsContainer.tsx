import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const CityCardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${designTokens.space.base}px;
    padding-top: ${designTokens.space.xxs}px;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        gap: ${designTokens.space.md}px;
        padding-top: ${designTokens.space.base}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        justify-content: center;
        grid-template-columns: repeat(2, minmax(min-content, 600px));
        padding-top: ${designTokens.space.base}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.lg}px) {
        gap: ${designTokens.space.lg}px;
        padding-top: ${designTokens.space.md}px;
    }
`

export default CityCardsContainer
