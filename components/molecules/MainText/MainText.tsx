import { ReactNode } from 'react'

import { Subtitle } from 'components/atoms/Subtitle'

import { Container, Title } from './styles'

interface Props {
    title: ReactNode
    subTitle: ReactNode
    noMarginBottom?: boolean
}

const MainText = ({ title, subTitle, noMarginBottom }: Props) => (
    <Container noMarginBottom={noMarginBottom}>
        <Title>{title}</Title>
        <Subtitle>{subTitle}</Subtitle>
    </Container>
)

MainText.defaultProps = {
    noMarginBottom: false,
}

export default MainText
