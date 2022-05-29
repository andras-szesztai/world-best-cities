import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

export const Container = styled.div<{ noMarginBottom?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: ${designTokens.space.sm}px;
    margin-bottom: ${({ noMarginBottom }) =>
        noMarginBottom ? 0 : designTokens.space.sm}px;

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        gap: ${designTokens.space.base}px;
        margin-bottom: ${({ noMarginBottom }) =>
            noMarginBottom ? 0 : designTokens.space.base}px;
    }

    @media only screen and (min-width: ${designTokens.breakPoints.lg}px) {
        align-items: center;
        margin-bottom: ${({ noMarginBottom }) =>
            noMarginBottom ? 0 : designTokens.space.lg}px;
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
