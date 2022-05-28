import { metrics } from 'constants/metric'

import { GetAllCitiesQuery, GetCityQuery } from './generated/graphql'

export type AllCities = GetAllCitiesQuery['allCities']

export type FullCity = AllCities[number]

export type City = GetCityQuery['getCity']

export type CitySummaryChart = Pick<FullCity, typeof metrics[number]>
