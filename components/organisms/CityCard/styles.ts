import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

export const Container = styled.div`
    height: ${designTokens.space['3xl']}px;
    display: flex;
    justify-content: space-between;
    position: relative;

    background-color: #faf3dd;

    padding: ${designTokens.space.sm}px;
    border-radius: ${designTokens.borderRadius.lg}px;
    border: ${designTokens.strokeWidth.md}px solid ${designTokens.color.black};
    box-shadow: ${designTokens.boxShadow.sm};
`
