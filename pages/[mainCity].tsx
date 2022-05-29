import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import request from 'graphql-request'
import Head from 'next/head'

import { CompareCitiesContainer } from 'components/atoms/CompareCitiesContainer'
import { CityPageContainer } from 'components/atoms/CityPageContainer'
import { LegendText } from 'components/atoms/LegendText'
import { Subtitle } from 'components/atoms/Subtitle'
import { MetricRank } from 'components/molecules/MetricRank'
import { MainText } from 'components/molecules/MainText'
import { SmallCityCard } from 'components/organisms/SmallCityCard'
import { GET_ALL_CITIES } from 'operations/queries/getAllCities'
import { GET_CITY_AND_LIMITED_ALL_CITIES } from 'operations/queries/getCity'
import { continentMapper } from 'constants/continent'
import { metrics } from 'constants/metric'
import { API_URL } from 'constants/api'
import { AllCities, City, LimitedCity } from 'types/city'
import { designTokens } from 'styles/designTokens'
import { CompareCitiesSelectorContainer } from 'components/atoms/CompareCitiesSelectorContainer'

interface Props {
    city: City
    compareCities: LimitedCity[]
}

const MainCityPage = ({ city, compareCities }: Props) => (
    <>
        <Head>
            <title>{city?.name} - People | Planet | Profit</title>
        </Head>
        <CityPageContainer>
            {!city && (
                <span>Sorry, we have no city such city in the database</span>
            )}
            {city && (
                <>
                    <MainText
                        title={
                            <LegendText
                                text={city.name}
                                color={
                                    designTokens.color[
                                        continentMapper[city.continent]
                                    ]
                                }
                            />
                        }
                        subTitle={
                            <div>
                                is ranked{' '}
                                <LegendText
                                    text={`#${city.overall}`}
                                    color={designTokens.color.white}
                                />{' '}
                                of 100 cities
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
                    <CompareCitiesSelectorContainer>
                        <Subtitle>Compare to</Subtitle>
                        <CompareCitiesContainer>
                            {compareCities
                                .filter((c) => c.name !== city.name)
                                .map((c) => (
                                    <SmallCityCard
                                        key={c.name}
                                        mainCitySlug={city.slug}
                                        city={c}
                                    />
                                ))}
                        </CompareCitiesContainer>
                    </CompareCitiesSelectorContainer>
                </>
            )}
        </CityPageContainer>
    </>
)

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await request<{
        allCities: AllCities
    }>(API_URL, GET_ALL_CITIES)
    return {
        paths: data.allCities.map((c) => ({
            params: { mainCity: c.slug },
        })),
        fallback: false,
    }
}

interface IParams extends ParsedUrlQuery {
    mainCity: string
}

export const getStaticProps: GetStaticProps<Props, IParams> = async (
    context
) => {
    const { mainCity } = context.params!
    const data = await request<{
        getCity: Props['city']
        allCities: Props['compareCities']
    }>({
        url: API_URL,
        document: GET_CITY_AND_LIMITED_ALL_CITIES,
        variables: { slug: mainCity },
    })
    return {
        props: { city: data.getCity, compareCities: data.allCities },
    }
}

export default MainCityPage
