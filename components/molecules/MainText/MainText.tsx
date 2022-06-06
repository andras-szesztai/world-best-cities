import { ReactNode } from 'react'

import { Subtitle } from 'components/atoms/Subtitle'

import { Container, Title } from './styles'

interface Props {
    title: ReactNode
    subTitle: ReactNode
    noMarginBottom?: boolean
    alignItems?: 'flex-start' | 'center'
}

const MainText = ({ title, subTitle, noMarginBottom, alignItems }: Props) => (
    <Container alignItems={alignItems} noMarginBottom={noMarginBottom}>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
    </Container>
)

MainText.defaultProps = {
    noMarginBottom: false,
    alignItems: 'center',
}

export default MainText
