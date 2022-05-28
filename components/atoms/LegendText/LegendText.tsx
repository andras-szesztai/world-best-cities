import { StyledSpan } from './styles'
import { Props } from './types'

const LegendText = ({ text, color }: Props) => (
    <StyledSpan color={color}>{text}</StyledSpan>
)

export default LegendText
