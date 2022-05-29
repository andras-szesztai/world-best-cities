import { ReactNode } from 'react'
import { Container, SubTitle, Title } from './styles'

interface Props {
    title: ReactNode
    subTitle: ReactNode
    noBottomPadding?: boolean
}

const MainText = ({ title, subTitle, noBottomPadding }: Props) => (
    <Container noBottomPadding={noBottomPadding!}>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
    </Container>
)

MainText.defaultProps = {
    noBottomPadding: false,
}

export default MainText
