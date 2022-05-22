import { GetAllCitiesQuery } from './generated/graphql'

export type AllCities = GetAllCitiesQuery['allCities']

export type FullCity = AllCities[number]

export const citySummaryChartKeys = ['people', 'profit', 'planet'] as const

export type CitySummaryChart = Pick<
    FullCity,
    typeof citySummaryChartKeys[number]
>
