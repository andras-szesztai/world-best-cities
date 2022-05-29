import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

const CardLink = styled.a<{ color: string }>`
    display: flex;
    justify-content: center;
    font-weight: ${designTokens.fontWeight.bold};
    font-size: ${designTokens.fontSize.base};
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

    :active {
        box-shadow: ${designTokens.boxShadow.xs};
        transform: translateY(2px);
    }
`

export default CardLink
