import { html } from "../../node_modules/lit-html/lit-html.js";
import TodoView from "../todo-view/index.js";

const TodoListView = (todoList) => html`
  <div>
    <a href="/#help">HELP</a>
    <form
      @submit=${(e) => {
        e.preventDefault();
        todoList.addTodo();
      }}
    >
      <ul>
        ${todoList.todos.map(TodoView)}
      </ul>
      <div>
        Tasks left: ${todoList.unfinishedTodoCount}
      </div>
      <input
        type="text"
        @change=${(e) => todoList.changeText(e.target.value)}
        .value=${todoList.newText}
      />
      <input type="submit" value="Add" />
    </form>
  </div>
`;
export default TodoListView;
