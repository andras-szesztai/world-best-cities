import { PrismaClient } from '@prisma/client'

import data from '../data/cities.json'

const prisma = new PrismaClient()

const run = async () => {
    await Promise.all(
        data
            // .slice(0, 9)
            .map(
                ({
                    city,
                    people,
                    planet,
                    profit,
                    overall,
                    country,
                    continent,
                }) =>
                    prisma.city.upsert({
                        where: { name: city },
                        update: {},
                        create: {
                            name: city,
                            people,
                            planet,
                            profit,
                            overall,
                            country,
                            continent,
                        },
                    })
            )
    )
}

run()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
