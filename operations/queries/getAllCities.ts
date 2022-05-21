import { gql } from '@apollo/client'

export const GET_ALL_CITIES = gql`
    query GetAllCities {
        allCities {
            name
        }
    }
`
