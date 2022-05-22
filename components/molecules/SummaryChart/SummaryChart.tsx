import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'
import { Props } from './types'

const Container = styled.div`
    width: ${designTokens.space.xl}px;
    height: ${designTokens.space.xl}px;
    background-color: red;
`

const SummaryChart = ({ data }: Props) => {
    return <Container>{data.overall}</Container>
}

export default SummaryChart
