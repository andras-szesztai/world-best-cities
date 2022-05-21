import { ApolloServer, gql } from 'apollo-server-micro'
import prisma from '../../lib/prisma'

// Construct a schema using GraphQL schema language
const typeDefs = gql`
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

const resolvers = {
    Query: {
        allCities: () => prisma.city.findMany(),
    },
}

const server = new ApolloServer({ typeDefs, resolvers })

export default server.createHandler({
    path: '/api/graphql',
})

export const config = {
    api: {
        bodyParser: false,
    },
}
