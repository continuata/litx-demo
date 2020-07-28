import { render } from './libs/lit-html';
import { routeTo } from './libs/lit-router';
import { autorun } from './libs/mobx';

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
