import { gql } from 'apollo-server-micro'

export const City = gql`
    type City {
        id: Int!
        name: String!
        people: Int!
        planet: Int!
        profit: Int!
        overall: Int!
        country: String!
        continent: String!
    }
    type Query {
        allCities: [City]!
    }
`
