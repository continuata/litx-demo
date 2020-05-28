import { render } from "./node_modules/lit-html/lit-html.js";
import { autorun } from "./node_modules/mobx/lib/mobx.module.js";
import { routeTo } from "./node_modules/lit-router/index.js";

export const Router = (routes, store) => {
  const handleHashChange = () => {
    const path = window.location.hash;
    console.log("new route", path);
    autorun(() => {
      const Component = routeTo(store, routes, path || "");
      render(Component, document.body);
    });
  };

  window.onhashchange = handleHashChange;
  handleHashChange();
};
