import { html } from "../../node_modules/lit-html/lit-html.js";

const AddTodoView = (todoList) =>
  html`<input
      type="text"
      @change=${(e) => todoList.changeText(e.target.value)}
      .value=${todoList.newText}
    />
    <input type="submit" value="Add" />`;

export default AddTodoView;
