import { html } from "../../node_modules/lit-html/lit-html.js";
import TodoView from "./todo.js";
import AddTodoView from "./add-todo.js";

const TodoListView = (todoList) =>
  html`<div>
    <a href="/#help">HELP</a>
    <form
      @submit=${(e) => {
        e.preventDefault();
        todoList.addTodo();
      }}
    >
      <ul>
        ${todoList.todos.map((todo) => TodoView(todo, todoList.showCompleted))}
      </ul>
      <div>
        show completed tasks:
        <input
          type="checkbox"
          ?checked=${todoList.showCompleted}
          @click="${() => todoList.toggleCompleted()}"
        />
      </div>
      <div>
        Tasks left: ${todoList.unfinishedTodoCount}
      </div>
      ${AddTodoView(todoList)}
    </form>
  </div>`;
export default TodoListView;
