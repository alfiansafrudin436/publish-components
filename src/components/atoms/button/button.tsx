import { IButton } from "./button.types"

const Button:React.FC<IButton> = (props:IButton) => {
    const { buttonTitle } = props
    return (
        <button>{buttonTitle}</button>
    )
}

export default Button