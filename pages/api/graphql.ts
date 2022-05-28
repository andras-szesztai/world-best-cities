import { ApolloServer } from 'apollo-server-micro'

import prisma from 'prisma/prisma'
import { typeDefs } from 'schemas'
import { resolvers } from 'resolvers'
import { ResolverContext } from 'resolvers/Query'
import { QueryResolvers } from 'types/generated/graphql'

const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers as QueryResolvers & Record<string, any>,
    context: (): ResolverContext => ({ db: prisma }),
})

export default server.createHandler({
    path: '/api/graphql',
})

export const config = {
    api: {
        bodyParser: false,
    },
}
