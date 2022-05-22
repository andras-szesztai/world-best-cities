import { metrics } from 'constants/metric'
import { designTokens } from 'styles/designTokens'

import { Bar, Container } from './styles'
import { Props } from './types'

const SummaryChart = ({ data }: Props) => (
    <Container>
        {metrics.map((key) => (
            <Bar
                key={key}
                height={100 - data[key]}
                color={designTokens.color[key]}
            />
        ))}
    </Container>
)

export default SummaryChart
