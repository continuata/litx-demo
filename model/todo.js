import {
  decorate,
  observable,
  action,
  extendObservable,
} from "../node_modules/mobx/lib/mobx.module.js";

class Todo {
  constructor(title) {
    const id = Math.random();
    extendObservable(this, { id, title, finished: false });
  }
  toggle() {
    this.finished = !this.finished;
  }
}
decorate(Todo, {
  title: observable,
  finished: observable,
  toggle: action,
});
export default Todo;
