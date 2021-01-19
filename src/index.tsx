import  React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import "./styles.css";
import { AppWrapper, Flex, Header, Main, Todo, TodoItem } from './styles/header'
import Button from './styles/Button'

import {rootStore} from './store'
import style,{createGlobalStyle} from 'styled-components'
const App = observer(() => {
  const data = rootStore.todoStore.filter((item) =>
    Object.values(item).some((value) =>
      typeof value !== "string"
        ? value === Number(rootStore.name)
        : value.includes(rootStore.name)
    ))
  return (
    <AppWrapper>
    <div>
      <div>
        <Header>Todo</Header>
          <Main>
            <Flex justify='center' margin='33px'>
              <input
        value={rootStore.name}
        onChange={(e) => rootStore.setName(e.target.value)}
        />
      <Button onClick={() => rootStore.addTodo()}>add</Button>
            </Flex>
           
      {data.map((u, i) => (
        <Todo key={i}>
          <TodoItem>{u.name}</TodoItem>
          <input
            checked={u.completed}
            onChange={() => u.toggleComleted()}
            type="checkbox"
          />
          <TodoItem onClick={()=>rootStore.deleteTodo(u)}>X</TodoItem>
        </Todo>
      ))}
        </Main>
           </div>
      </div>
      </AppWrapper>
  );
});
const Global = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-size:17px;
  outline:none;
}
`
const rootElement = document.getElementById("root");
render(
  <>  
    <Global/>
    <App />
  </>, rootElement);
