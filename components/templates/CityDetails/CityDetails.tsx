import { LegendText } from 'components/atoms/LegendText'
import { MainText } from 'components/molecules/MainText'
import { MetricRank } from 'components/molecules/MetricRank'
import { continentMapper } from 'constants/continent'
import { metrics } from 'constants/metric'
import { FullCity } from 'types/city'
import { designTokens } from 'styles/designTokens'

import Container from './styles'

interface Props {
    city: FullCity
    isContextText?: boolean
}

const CityDetails = ({ city, isContextText }: Props) => (
    <Container>
        <MainText
            alignItems="flex-start"
            title={
                <LegendText
                    text={city.name}
                    color={designTokens.color[continentMapper[city.continent]]}
                />
            }
            subTitle={
                <div>
                    is ranked{' '}
                    <LegendText
                        text={`#${city.overall}`}
                        color={designTokens.color.white}
                    />{' '}
                    {isContextText && 'of 100 cities'}
                </div>
            }
            noMarginBottom
        />
        {metrics.map((metric) => (
            <MetricRank
                key={`${city.name}${metric}`}
                rank={city[metric]}
                metric={metric}
            />
        ))}
    </Container>
)

CityDetails.defaultProps = {
    isContextText: false,
}

export default CityDetails
