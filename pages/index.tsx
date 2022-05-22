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

export default Home
