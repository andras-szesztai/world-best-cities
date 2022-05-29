import Link from 'next/link'

import { designTokens } from 'styles/designTokens'
import { continentMapper } from 'constants/continent'

import { Props } from './types'
import { CardTitle, Container, Rank } from './styles'

const SmallCityCard = ({ city }: Props) => (
    <Link href={`/${city.slug}`} passHref>
        <Container color={designTokens.color[continentMapper[city.continent]]}>
            <Rank>#{city.overall}</Rank>
            <CardTitle>{city.name}</CardTitle>
        </Container>
    </Link>
)

export default SmallCityCard
