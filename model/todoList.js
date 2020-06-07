import {
  computed,
  decorate,
  observable,
  action,
  extendObservable,
} from "../node_modules/mobx/lib/mobx.module.js";
import Todo from "./todo.js";

class TodoList {
  constructor() {
    extendObservable(this, { todos: [], newText: "", showCompleted: false });
  }
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }
  changeText(text) {
    this.newText = text;
  }
  addTodo() {
    this.todos.push(new Todo(this.newText));
    this.newText = "";
  }
  removeTodo(id) {
    this.todos.splice(id, 1);
  }
}
decorate(TodoList, {
  todos: observable,
  unfinishedTodoCount: computed,
  addTodo: action,
  changeText: action,
  removeTodo: action,
});
export default TodoList;
