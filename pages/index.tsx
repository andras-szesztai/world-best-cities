import type { NextPage } from 'next'

import styles from 'styles/Home.module.css'
import { useGetAllCitiesQuery } from 'types/generated/graphql'

const Home: NextPage = () => {
    const { data, loading } = useGetAllCitiesQuery()
    return (
        <div className={styles.container}>
            {loading && 'Loading...'}
            {data?.allCities.map((city) => (
                <div key={city.name}>{city.name}</div>
            ))}
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default Home
