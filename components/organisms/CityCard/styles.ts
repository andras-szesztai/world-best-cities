import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

export const Container = styled.div<{ color: string }>`
    height: ${designTokens.space['3xl']}px;
    display: flex;
    justify-content: space-between;
    position: relative;

    background-color: ${({ color }) => color};

    padding: ${designTokens.space.sm}px;
    border-radius: ${designTokens.borderRadius.lg}px;
    border: ${designTokens.strokeWidth.lg}px solid ${designTokens.color.black};
    box-shadow: ${designTokens.boxShadow.sm};
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
`

export const Rank = styled.span`
    font-size: ${designTokens.fontSize.lg};
    line-height: 1;
`

export const CardTitle = styled.h2`
    font-size: ${designTokens.fontSize.md};
    font-weight: ${designTokens.fontWeight.bold};
    margin: 0;
    line-height: 1;
`
