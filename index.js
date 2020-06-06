import { defroute } from "./node_modules/lit-router/index.js";

import TodoListView from "./pages/todos/todo-list.js";
import HelpView from "./pages/help/index.js";
import { Router } from "./router.js";

import store from "./model/index.js";

const routes = {
  index: [defroute``, TodoListView],
  help: [defroute`#help`, HelpView],
};

Router(routes, store);
