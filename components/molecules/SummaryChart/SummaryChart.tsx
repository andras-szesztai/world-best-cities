import styled from '@emotion/styled'

import { designTokens } from 'styles/designTokens'

import { Container } from './styles'
import { Props } from './types'

const SummaryChart = ({ data }: Props) => {
    return <Container>{data.overall}</Container>
}

export default SummaryChart
