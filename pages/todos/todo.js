import { html, nothing } from "../../node_modules/lit-html/lit-html.js";

const TodoView = (todo, show) =>
  todo.finished && !show
    ? nothing
    : html` <li>
        <input
          type="checkbox"
          ?checked=${todo.finished}
          @click="${() => todo.toggle()}"
        />
        ${todo.title}
      </li>`;
export default TodoView;
