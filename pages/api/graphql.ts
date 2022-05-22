import { ApolloServer, gql } from 'apollo-server-micro'

import { typeDefs } from 'schemas'
import { resolvers } from 'resolvers'
import { QueryResolvers } from 'types/generated/graphql'

const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers as QueryResolvers & Record<string, any>,
})

export default server.createHandler({
    path: '/api/graphql',
})

export const config = {
    api: {
        bodyParser: false,
    },
}
