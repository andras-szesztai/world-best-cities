import { QueryResolvers } from 'types/generated/graphql'

import { ResolverContext } from '.'

export const Query: QueryResolvers<ResolverContext> = {
    allCities: (_, __, { db }) => db.city.findMany(),
}