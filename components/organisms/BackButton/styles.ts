import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

export const Container = styled.a`
    display: flex;
    cursor: pointer;

    color: ${designTokens.color.black};
    background-color: ${designTokens.color.white};
    justify-self: flex-start;

    padding: ${designTokens.space.xs}px;
    gap: ${designTokens.space.xs}px;
    border-radius: ${designTokens.borderRadius.md}px;
    border: ${designTokens.strokeWidth.lg}px solid ${designTokens.color.black};
    box-shadow: ${designTokens.boxShadow.sm};
    transition: all ${designTokens.duration.sm}ms;

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        padding: ${designTokens.space.sm}px;
        gap: ${designTokens.space.sm}px;
    }

    :hover {
        box-shadow: ${designTokens.boxShadow.md};
        transform: translateY(-${designTokens.space.xxs}px);
    }

    :focus {
        box-shadow: ${designTokens.boxShadow.md};
        transform: translateY(-4px);
        outline: none;
    }

    :active {
        box-shadow: ${designTokens.boxShadow.xs};
        transform: translateY(2px);
    }
`

export const CardTitle = styled.h3`
    font-size: ${designTokens.fontSize.base};
    font-weight: ${designTokens.fontWeight.bold};
    margin: 0;

    @media only screen and (min-width: ${designTokens.breakPoints.md}px) {
        font-size: ${designTokens.fontSize.md};
    }
`
