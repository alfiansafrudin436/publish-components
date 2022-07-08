import { IButton } from "./button.types"
import { StyledButton } from './button.styles'

const Button:React.FC<IButton> = (props:IButton) => {
    const { buttonTitle, types } = props
    return (
        <StyledButton types={types}>{buttonTitle}</StyledButton>
    )
}

export default Button