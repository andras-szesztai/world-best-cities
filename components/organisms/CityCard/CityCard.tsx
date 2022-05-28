import { pick } from 'lodash'
import Link from 'next/link'

import { SummaryChart } from 'components/molecules/SummaryChart'
import { metrics } from 'constants/metric'
import { designTokens } from 'styles/designTokens'
import { Continents } from 'types/continent'

import { Props } from './types'
import { CardTitle, Container, Rank, TitleContainer } from './styles'

const continentMapper: Record<string, Continents> = {
    'North America': 'northAmerica',
    'South America': 'southAmerica',
    Europe: 'europe',
    Asia: 'asia',
    Oceania: 'oceania',
    'Middle East': 'middleEast',
    Africa: 'africa',
}

const CityCard = ({ city }: Props) => (
    <Link href={`/${city.slug}`} passHref>
        <Container color={designTokens.color[continentMapper[city.continent]]}>
            <TitleContainer>
                <Rank>#{city.overall}</Rank>
                <CardTitle>{city.name}</CardTitle>
            </TitleContainer>
            <SummaryChart data={pick(city, metrics)} />
        </Container>
    </Link>
)

export default CityCard
