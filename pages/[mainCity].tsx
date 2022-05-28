import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import request from 'graphql-request'

import { GET_ALL_CITIES } from 'operations/queries/getAllCities'
import { GET_CITY } from 'operations/queries/getCity'
import { AllCities, City, FullCity } from 'types/city'

import { baseURL, client } from './_app'

interface Props {
    city: City
}

const MainCityPage = ({ city }: Props) => <div>{city?.name}</div>

export const getStaticPaths: GetStaticPaths = async () => {
    console.log({ baseURL })
    const data = await request<{
        allCities: AllCities
    }>(`${baseURL}/api/graphql`, GET_ALL_CITIES)
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
