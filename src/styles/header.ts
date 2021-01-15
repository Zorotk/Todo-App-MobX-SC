import styled from 'styled-components';

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