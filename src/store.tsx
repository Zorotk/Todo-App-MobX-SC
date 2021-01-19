import { Instance, types } from "mobx-state-tree";

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

export const rootStore = RootStore.create({});