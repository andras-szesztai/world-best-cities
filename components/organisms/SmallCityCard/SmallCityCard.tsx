import Link from 'next/link'

import { continentMapper } from 'constants/continent'
import { designTokens } from 'styles/designTokens'

import { Props } from './types'
import { CardTitle, Container, Rank } from './styles'

const SmallCityCard = ({ city, mainCitySlug }: Props) => (
    <Link href={`/${mainCitySlug}/${city.slug}`} passHref>
        <Container color={designTokens.color[continentMapper[city.continent]]}>
            <Rank>#{city.overall}</Rank>
            <CardTitle>{city.name}</CardTitle>
        </Container>
    </Link>
)

export default SmallCityCard
