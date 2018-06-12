import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

const renderApp = (element: HTMLElement | null) => {
  ReactDOM.render(<App />, element);
};
export { renderApp };
