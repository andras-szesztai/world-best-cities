import type { AppProps } from 'next/app'

import { LayoutContainer } from 'components/atoms/LayoutContainer'

import 'styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <LayoutContainer>
            <Component {...pageProps} />
        </LayoutContainer>
    )
}

export default MyApp
