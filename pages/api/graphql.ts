import { ApolloServer, gql } from 'apollo-server-micro'

import { typeDefs } from 'schemas'
import { resolvers } from 'resolvers'

const server = new ApolloServer({ typeDefs, resolvers })

export default server.createHandler({
    path: '/api/graphql',
})

export const config = {
    api: {
        bodyParser: false,
    },
}
