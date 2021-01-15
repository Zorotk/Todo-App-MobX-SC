import  React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import "./styles.css";
import { Instance, types } from "mobx-state-tree";
import {Header,Main, Todo, TodoItem} from './styles/header'



const TodoStore = types
  .model("TodoStore", {
    name: "",
    completed: true,
    id: types.number,
  })
  .actions((self) => ({
    toggleComleted() {
      self.completed = !self.completed;
    }
  
  }));

const RootStore = types
  .model("RootStore", {
    todoStore: types.array(TodoStore),
    name: "",
  })
  .actions((self) => ({
    addTodo() {
      self.todoStore.push({
        name: self.name,
        completed: false,
        id: Math.random(),
      });
      self.name = ''
    },
    deleteTodo(todo:Instance<typeof TodoStore>) {
      self.todoStore.remove(todo)
    },
      setName(title:string) {
      self.name=title
    }
  }));

const rootStore = RootStore.create({});

const App = observer(() => {
  const data = rootStore.todoStore.filter((item) =>
    Object.values(item).some((value) =>
      typeof value !== "string"
        ? value === Number(rootStore.name)
        : value.includes(rootStore.name)
    ))
  return (
    <div>
      <div>
        <Header>Todo</Header>
        <Main>
           <input
        value={rootStore.name}
        onChange={(e) => rootStore.setName(e.target.value)}
        />
  
      <button onClick={() => rootStore.addTodo()}>add</button>
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
  );
});

const rootElement = document.getElementById("root");
render(<App />, rootElement);
