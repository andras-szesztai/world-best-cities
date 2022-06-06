import Link from 'next/link'

import { CardTitle, Container } from './styles'

interface Props {
    href: string
}

const BackButton = ({ href }: Props) => (
    <Link href={href} passHref>
        <Container>
            <CardTitle>Back</CardTitle>
        </Container>
    </Link>
)

export default BackButton
