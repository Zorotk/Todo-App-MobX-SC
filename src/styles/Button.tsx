import React from 'react';
import styled, {css, keyframes} from 'styled-components'

const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
100% {
    transform: rotateZ(360deg);
}
`

const StyledButton = styled.button.attrs(props => ({
    outlined: true,
}))`
border: none;
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
&:focus {
    outline: none;
}
`

const Button = (props:any) => {
    return <StyledButton {...props}/>
};

export default Button;
