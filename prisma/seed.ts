import data from '../data/cities.json'
import { slugify } from '../utils/string'

import prisma from './prisma'

const run = async () => {
    await Promise.all(
        data
            .slice(28, 82)
            .map(
                ({
                    city,
                    people,
                    planet,
                    profit,
                    overall,
                    country,
                    continent,
                }: any) =>
                    prisma.city.upsert({
                        where: { name: city },
                        update: {},
                        create: {
                            name: city,
                            slug: slugify(city),
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
