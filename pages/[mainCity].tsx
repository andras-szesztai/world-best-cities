import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'

import { GET_ALL_CITIES } from 'operations/queries/getAllCities'
import { AllCities, City, FullCity } from 'types/city'

import { client } from './_app'
import { GET_CITY } from 'operations/queries/getCity'

interface Props {
    city: City
}

const MainCityPage = ({ city }: Props) => {
    return <div>{city?.name}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query<{
        allCities: AllCities
    }>({
        query: GET_ALL_CITIES,
    })
    return {
        paths: data.allCities.map((c) => ({
            params: { mainCity: c.slug },
        })),
        fallback: true,
    }
}

interface IParams extends ParsedUrlQuery {
    mainCity: string
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { mainCity } = context.params as IParams
    const { data } = await client.query<{
        getCity: FullCity
    }>({
        query: GET_CITY,
        variables: { slug: mainCity },
    })
    return { props: { city: data.getCity } }
}

export default MainCityPage
