import React, {useState} from 'react';
import styled from 'styled-components'
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
width:100%;
height:50vh;
background: wheat;
font-size: 24px;
border: none;
resize: none;
color:${props => props.color || props.theme.colors.secondary};
padding-left:20px;
&:focus {
    outline: none;
}
`

const Console = ({color, ...props}) => {
    const [lines, setLines] = useState(['C:/users/'])

    const onKeyPress = e => {
        if (e.charCode == 13) {
            setLines([...lines, "C:/users/"])
        }
    }

    return (
        <Flex>
            <Flex direction={"column"} margin="0 10px">
                {lines.map((line,i) =>
                    <Line key={i} color={color}>{line}</Line>
                )}
            </Flex>
            <StyledConsole onKeyPress={onKeyPress} color={color} {...props}/>
        </Flex>
    )
};

export default Console;
