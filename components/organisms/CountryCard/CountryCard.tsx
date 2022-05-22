import { pick } from 'lodash'

import { SummaryChart } from 'components/molecules/SummaryChart'
import { CitySummaryChartKeys } from 'types/city'

import { Props } from './types'

const CountryCard = ({ city }: Props) => (
  <div>
    {city.name}
    <SummaryChart data={pick(city, CitySummaryChartKeys)} />
  </div>
)

export default CountryCard
