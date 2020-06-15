import { render } from "https://unpkg.com/lit-html?module";
import { routeTo } from "https://unpkg.com/lit-router/index.js";
import { autorun } from "https://unpkg.com/mobx/lib/mobx.module.js";

export const Router = (routes, store) => {
  const handleHashChange = () => {
    const path = window.location.hash;
    autorun(() => {
      const Component = routeTo(store, routes, path || "");
      render(Component, document.body);
    });
  };

  window.onhashchange = handleHashChange;
  handleHashChange();
};
