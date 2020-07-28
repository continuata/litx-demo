import { decorate, observable, action, extendObservable } from '../libs/mobx';

class Todo {
  constructor(text) {
    const id = Math.random();
    extendObservable(this, { id, text, finished: false });
  }
  toggle() {
    this.finished = !this.finished;
  }
}
decorate(Todo, {
  text: observable,
  finished: observable,
  toggle: action,
});

export default Todo;
