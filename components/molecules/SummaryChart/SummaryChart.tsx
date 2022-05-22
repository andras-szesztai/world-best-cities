import { designTokens } from 'styles/designTokens'
import { citySummaryChartKeys } from 'types/city'

import { Bar, Container } from './styles'
import { Props } from './types'

type Data = { value: number; fill: string }

const SummaryChart = ({ data }: Props) => {
    console.log(data)

    return (
        <Container>
            {citySummaryChartKeys.map((key) => (
                <Bar
                    key={key}
                    height={100 - data[key]}
                    color={designTokens.color[key]}
                />
            ))}
        </Container>
    )
}

export default SummaryChart
