import { pick } from 'lodash'

import { SummaryChart } from 'components/molecules/SummaryChart'
import { citySummaryChartKeys } from 'types/city'

import { Props } from './types'
import { Container } from './styles'

const CityCard = ({ city }: Props) => (
    <Container>
        #{city.overall} {city.name}
        <SummaryChart data={pick(city, citySummaryChartKeys)} />
    </Container>
)

export default CityCard
