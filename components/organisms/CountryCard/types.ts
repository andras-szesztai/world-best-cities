import { GetAllCitiesQuery } from 'types/generated/graphql'

export interface Props {
    city: GetAllCitiesQuery['allCities'][number]
}
