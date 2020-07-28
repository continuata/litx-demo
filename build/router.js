import { render } from 'https://unpkg.com/lit-html@1.2.1/lit-html.js?module';
import { routeTo } from 'https://unpkg.com/lit-router@0.2.2/index.js';
import { autorun } from 'https://unpkg.com/mobx@5.15.4/lib/mobx.module.js';

export const Router = (routes, store) => {
  const handleHashChange = () => {
    const path = window.location.hash;
    autorun(() => {
      const Component = routeTo(store, routes, path || '');
      render(Component, document.body);
    });
  };

  window.onhashchange = handleHashChange;
  handleHashChange();
};
