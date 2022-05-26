import type { GetStaticProps } from 'next'
import Head from 'next/head'

import { MainText } from 'components/molecules/MainText'
import { CityCard } from 'components/organisms/CityCard'
import { LegendText } from 'components/atoms/LegendText'
import { CityCardsContainer } from 'components/atoms/CityCardsContainer'
import { GET_ALL_CITIES } from 'operations/queries/getAllCities'
import { AllCities } from 'types/city'
import { designTokens } from 'styles/designTokens'

import { client } from './_app'

interface StaticProps {
    allCities: AllCities
}
interface Props extends StaticProps {}

const Home = ({ allCities }: Props) => {
    return (
        <>
            <Head>
                <title>World's Best Cities</title>
            </Head>
            <MainText
                title="World's Best Cities"
                subTitle={
                    <div>
                        Ranking of cities on{' '}
                        <LegendText
                            text="social"
                            color={designTokens.color.people}
                        />
                        ,{' '}
                        <LegendText
                            text="environmental"
                            color={designTokens.color.planet}
                        />{' '}
                        and{' '}
                        <LegendText
                            text="economic"
                            color={designTokens.color.profit}
                        />{' '}
                        factors
                    </div>
                }
            />
            <CityCardsContainer>
                {allCities.map((city) => (
                    <CityCard key={city.name} city={city} />
                ))}
            </CityCardsContainer>
        </>
    )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
    const { data } = await client.query<StaticProps>({
        query: GET_ALL_CITIES,
    })
    return {
        props: { allCities: data.allCities },
    }
}

export default Home
