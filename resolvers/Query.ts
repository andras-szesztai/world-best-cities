import prisma from 'prisma/prisma'
import { QueryResolvers } from 'types/generated/graphql'

export const Query: QueryResolvers = {
    allCities: () => prisma.city.findMany(),
}
