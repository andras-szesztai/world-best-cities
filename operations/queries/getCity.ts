import { gql } from 'graphql-request'

export const GET_CITY = gql`
    query GetCity($slug: String!) {
        getCity(slug: $slug) {
            name
            people
            planet
            profit
            overall
            country
            continent
        }
    }
`
