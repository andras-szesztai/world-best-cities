import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import request from 'graphql-request'

import { GET_ALL_CITIES } from 'operations/queries/getAllCities'
import { GET_CITY } from 'operations/queries/getCity'
import { AllCities, City, FullCity } from 'types/city'
import { API_URL } from 'constants/api'

interface Props {
    city: City
}

const MainCityPage = ({ city }: Props) => <div>{city?.name}</div>

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

export const getStaticProps: GetStaticProps = async (context) => {
    const { mainCity } = context.params as IParams
    const data = await request<{
        getCity: FullCity
    }>({
        url: API_URL,
        document: GET_CITY,
        variables: { slug: mainCity },
    })
    return { props: { city: data.getCity } }
}

export default MainCityPage
