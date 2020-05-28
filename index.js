import { html, render } from "./node_modules/lit-html/lit-html.js";
import { autorun } from "./node_modules/mobx/lib/mobx.module.js";

import store, { Todo } from "./model.js";

const TodoView = (todo) => html`
  <li>
    <input
      type="checkbox"
      checked=${todo.finished}
      @click="${() => todo.toggle()}}"
    />
    ${todo.title}
  </li>
`;

const TodoListView = (todoList) => html`
  <div>
    <form
      @submit=${(e) => {
        e.preventDefault();
        todoList.addTodo();
        return false;
      }}
    >
      <ul>
        ${todoList.todos.map(TodoView)}
      </ul>
      <div>
        Tasks left: ${todoList.unfinishedTodoCount}
      </div>
      <input
        @change=${(e) => todoList.changeText(e.target.value)}
        .value=${todoList.newText}
      />
      <input type="submit" value="Add" />
    </form>
  </div>
`;

autorun(() => {
  console.log("Tasks left: " + store.unfinishedTodoCount);
  render(TodoListView(store), document.body);
});
