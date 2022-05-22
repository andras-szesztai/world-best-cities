import { continents } from 'constants/continent'
import { metrics } from 'constants/metric'
import { GetAllCitiesQuery } from './generated/graphql'

export type AllCities = GetAllCitiesQuery['allCities']

export type FullCity = AllCities[number]

export type CitySummaryChart = Pick<FullCity, typeof metrics[number]>
