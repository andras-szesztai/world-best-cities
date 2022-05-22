import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

export const Container = styled.div`
    position: relative;
    width: ${designTokens.space['4xl']}px;
    height: 100%;
    display: flex;
    align-items: flex-end;
    gap: ${designTokens.space.xs}px;
`

export const Bar = styled.div<{ color: string; height: number }>`
    flex: 1;
    height: ${({ height }) => height}%;
    background: ${({ color }) => color};
    border: ${designTokens.strokeWidth.md}px solid ${designTokens.color.black};
    border-radius: ${designTokens.borderRadius.md}px;
`
