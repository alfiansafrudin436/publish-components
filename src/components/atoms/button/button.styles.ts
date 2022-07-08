import styled from 'styled-components'
import { IButton } from './button.types'

export const StyledButton = styled.button<IButton>`
    background-color: ${(p) =>
    p.types === 'primary' ? 'blue' :
    p.types === 'secondary' ? 'pink' : 'white'};
    color: ${(p) =>
    p.types === 'primary' ? 'white' :
    p.types === 'secondary' ? 'white' : 'black'};
    border-color: ${(p) =>
    p.types === 'primary' ? 'blue' :
    p.types === 'secondary' ? 'pink' : 'black'};
`