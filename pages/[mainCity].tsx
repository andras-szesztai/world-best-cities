import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import request from 'graphql-request'
import Head from 'next/head'

import { CityPageContainer } from 'components/atoms/CityPageContainer'
import { MetricRank } from 'components/molecules/MetricRank'
import { MainText } from 'components/molecules/MainText'
import { LegendText } from 'components/atoms/LegendText'
import { Subtitle } from 'components/atoms/Subtitle'
import { GET_ALL_CITIES } from 'operations/queries/getAllCities'
import { GET_CITY } from 'operations/queries/getCity'
import { continentMapper } from 'constants/continent'
import { AllCities, City, FullCity } from 'types/city'
import { designTokens } from 'styles/designTokens'
import { API_URL } from 'constants/api'
import { metrics } from 'constants/metric'

interface Props {
    city: City
}

const MainCityPage = ({ city }: Props) => (
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
                    <Subtitle>Compare to</Subtitle>
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

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const { mainCity } = context.params as IParams
    const data = await request<{
        getCity: FullCity
    }>({
        url: API_URL,
        document: GET_CITY,
        variables: { slug: mainCity },
    })
    // const allCitiesData = await request<{
    //     allCities: AllCities
    // }>(API_URL, GET_ALL_CITIES_LIMITED)
    return { props: { city: data.getCity } }
}

export default MainCityPage
