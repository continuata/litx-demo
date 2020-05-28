import { html } from "../../node_modules/lit-html/lit-html.js";

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
export default TodoView;
