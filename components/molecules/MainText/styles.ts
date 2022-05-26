import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${designTokens.space.sm}px;
    padding: ${designTokens.space.sm}px;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        gap: ${designTokens.space.md}px;
        padding: ${designTokens.space.md}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.lg}px) {
        padding: ${designTokens.space.lg}px;
        align-items: center;
    }
`

export const Title = styled.h1`
    font-size: ${designTokens.fontSize.xl};
    margin: 0;
    font-weight: ${designTokens.fontWeight.bold};
    line-height: 1.1;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        line-height: 1.2;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.lg}px) {
        line-height: 1.4;
    }
`

export const SubTitle = styled.h2`
    line-height: 2;
    font-size: ${designTokens.fontSize.md};
    margin: 0;
    font-weight: ${designTokens.fontWeight.regular};

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        line-height: 1.8;
    }
`
