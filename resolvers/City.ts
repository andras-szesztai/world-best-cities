import prisma from 'prisma/prisma'

export const City = {
    Query: {
        allCities: () => prisma.city.findMany(),
    },
}
