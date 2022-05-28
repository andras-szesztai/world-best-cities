import type { AppProps } from 'next/app'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import 'styles/globals.css'

export const baseURL =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:3000'
        : 'http://world-best-cities.vercel.app'

export const client = new ApolloClient({
    uri: `${baseURL}/api/graphql`,
    cache: new InMemoryCache(),
})

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp
