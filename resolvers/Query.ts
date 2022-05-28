import { PrismaClient } from '@prisma/client'
import { QueryResolvers } from 'types/generated/graphql'

export interface ResolverContext {
    db: PrismaClient
}

export const Query: QueryResolvers<ResolverContext> = {
    allCities: (_, __, { db }) =>
        db.city.findMany({
            orderBy: {
                overall: 'asc',
            },
        }),
    getCity: (_, { slug }, { db }) =>
        db.city.findUnique({
            where: { slug },
        }),
}
