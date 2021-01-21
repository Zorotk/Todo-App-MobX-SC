import styled, { StyledFunction } from "styled-components"
import React from "react";
import { Styles } from './interface'
export const Header = styled.header`
  display:grid;
  justify-content:center;
  width: 100%;
  background-color: dodgerblue;
  padding: 20px;
  color: white;
`;

export const Main = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  background:wheat;
  margin-top:11px;
`
export const TodoItem = styled.div`
  height: 100%;
  background:white;
  margin:10px;
  padding:20px;
`
export const Todo = styled.div`
   display: flex;
   height: 100%;
   background:green;
   margin:10px;
   padding:20px;
`
export const AppWrapper = styled.div`
  min-height:100vh;
  width:100%;
  background:blue;
  opacity:0.7;
  padding:5em;
`



const ContainWrapper = styled.div<Styles>`
display: flex;
flex-direction: ${props => props.direction || 'row'};
align-items: ${props => props.align || 'stretch'};
justify-content: ${props => props.justify || 'stretch'};
margin:${({ margin }) => margin || '0'} ;
`
export const Flex = (props: any) => {
  return <ContainWrapper {...props} />
};

