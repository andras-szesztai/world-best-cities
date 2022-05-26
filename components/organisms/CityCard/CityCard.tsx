import { pick } from 'lodash'

import { SummaryChart } from 'components/molecules/SummaryChart'
import { metrics } from 'constants/metric'
import { designTokens } from 'styles/designTokens'
import { Continents } from 'types/continent'
import { slugify } from 'utils/string'

import { Props } from './types'
import { CardTitle, Container, Rank, TitleContainer } from './styles'
import Link from 'next/link'

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
    <Link href={`/${slugify(city.name)}`} passHref>
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
