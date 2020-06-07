import { html } from "../../node_modules/lit-html/lit-html.js";

const TodoView = (todo, index, todoList) =>
  html`<li
    class="todo-item ${todo.finished ? "done" : ""}"
    data-key="${todo.id}"
  >
    <input
      id="${todo.id}"
      type="checkbox"
      ?checked=${todo.finished}
      @click="${() => todo.toggle()}"
    />
    <label for="${todo.id}" class="tick js-tick"></label>
    <span>${todo.text}</span>
    <button
      class="delete-todo js-delete-todo"
      @click="${() => todoList.removeTodo(index)}"
    >
      <svg><use href="#delete-icon"></use></svg>
    </button>
  </li>`;

export default TodoView;
