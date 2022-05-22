import { PrismaClient } from '@prisma/client'
import { Resolvers } from 'types/generated/graphql'

import { Query } from './Query'

export interface ResolverContext {
    db: PrismaClient
}

export const resolvers: Resolvers<ResolverContext> = { Query }
