import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

export const Container = styled.a<{ color: string }>`
    display: flex;
    text-align: left;
    cursor: pointer;

    background-color: ${({ color }) => color};

    padding: ${designTokens.space.xs}px;
    gap: ${designTokens.space.xs}px;
    border-radius: ${designTokens.borderRadius.md}px;
    border: ${designTokens.strokeWidth.lg}px solid ${designTokens.color.black};
    box-shadow: ${designTokens.boxShadow.sm};
    transition: all ${designTokens.duration.sm}ms;

    :hover {
        box-shadow: ${designTokens.boxShadow.md};
        transform: translateY(-${designTokens.space.xxs}px);
    }

    :focus {
        box-shadow: ${designTokens.boxShadow.md};
        transform: translateY(-4px);
        outline: none;
    }
`

export const Rank = styled.span`
    font-size: ${designTokens.fontSize.base};
    font-weight: ${designTokens.fontWeight.bold};

    @media only screen and (min-width: ${designTokens.breakPoints.sm}px) {
        font-size: ${designTokens.fontSize.base};
    }
`

export const CardTitle = styled.h3`
    font-size: ${designTokens.fontSize.base};
    font-weight: ${designTokens.fontWeight.regular};
    margin: 0;
`
