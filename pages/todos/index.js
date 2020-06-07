import { html } from "../../node_modules/lit-html/lit-html.js";
import TodoView from "./todo.js";
import AddTodoView from "./add-todo.js";
import SVG from "./svg.js";

const TodoListView = (todoList) =>
  html`<div>
    <main>
      <div class="container">
        <a href="/#help">HELP</a>
        <h1 class="app-title">todos</h1>
        <ul class="todo-list js-todo-list">
          ${todoList.todos.map((todo, index) =>
            TodoView(todo, index, todoList)
          )}
        </ul>
        ${AddTodoView(todoList)}
      </div>
    </main>
    ${SVG()}
  </div>`;

export default TodoListView;
