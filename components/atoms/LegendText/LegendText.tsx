import { StyledSpan } from './styles'

export interface Props {
    text: string
    color: string
}

const LegendText = ({ text, color }: Props) => (
    <StyledSpan color={color}>{text}</StyledSpan>
)

export default LegendText
