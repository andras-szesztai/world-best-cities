import { gql } from '@apollo/client'

export const GET_ALL_CITIES = gql`
    query GetAllCities {
        allCities {
            name
            slug
            people
            planet
            profit
            overall
            country
            continent
        }
    }
`
