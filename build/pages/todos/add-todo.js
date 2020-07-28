import { html } from 'https://unpkg.com/lit-html@1.2.1/lit-html.js?module';

const AddTodoView = (todoList) =>
  html` <form
    class="js-form"
    @submit=${(e) => {
      e.preventDefault();
      todoList.addTodo();
    }}
  >
    <input
      autofocus
      type="text"
      @change=${(e) => todoList.changeText(e.target.value)}
      aria-label="Enter a new todo item"
      placeholder="E.g. Build a web app"
      class="js-todo-input"
      .value=${todoList.newText}
    />
  </form>`;

export default AddTodoView;