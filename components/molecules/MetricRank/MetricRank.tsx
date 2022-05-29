import { LegendText } from 'components/atoms/LegendText'
import { Subtitle } from 'components/atoms/Subtitle'
import { metrics } from 'constants/metric'
import { designTokens } from 'styles/designTokens'

import { Container } from './styles'

interface Props {
    rank: number
    metric: typeof metrics[number]
}

const MetricRank = ({ rank, metric }: Props) => {
    return (
        <Container>
            <Subtitle>
                <LegendText
                    text={`#${rank}`}
                    color={designTokens.color[metric]}
                />{' '}
                {metric}
            </Subtitle>
        </Container>
    )
}

export default MetricRank
