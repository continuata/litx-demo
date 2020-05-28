import { defroute } from "./node_modules/lit-router/index.js";

import TodoListView from "./components/todo-list-view/index.js";
import HelpView from "./components/help/index.js";
import { Router } from "./router.js";

import store from "./model/index.js";

const routes = {
  index: [defroute``, TodoListView],
  help: [defroute`#help`, HelpView],
};

Router(routes, store);
