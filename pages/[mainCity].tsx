import { GetStaticProps, GetStaticPaths } from 'next'
import { ParsedUrlQuery } from 'querystring'
import request from 'graphql-request'

import { GET_ALL_CITIES } from 'operations/queries/getAllCities'
import { GET_CITY } from 'operations/queries/getCity'
import { AllCities, City, FullCity } from 'types/city'

interface Props {
    city: City
}

const MainCityPage = ({ city }: Props) => <div>{city?.name}</div>

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await request<{
        allCities: AllCities
    }>('https://world-best-cities.herokuapp.com/', GET_ALL_CITIES)
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
        url: 'https://world-best-cities.herokuapp.com/',
        document: GET_CITY,
        variables: { slug: mainCity },
    })
    return { props: { city: data.getCity } }
}

export default MainCityPage
