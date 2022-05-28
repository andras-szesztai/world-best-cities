import { metrics } from 'constants/metric'

import { Query } from './generated/graphql'

export type AllCities = Query['allCities']

export type FullCity = AllCities[number]

export type City = Query['getCity']

export type CitySummaryChart = Pick<FullCity, typeof metrics[number]>
