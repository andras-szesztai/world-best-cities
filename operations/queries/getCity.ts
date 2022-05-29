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

export const GET_CITY_AND_LIMITED_ALL_CITIES = gql`
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
        allCities {
            name
            slug
            overall
            continent
        }
    }
`
