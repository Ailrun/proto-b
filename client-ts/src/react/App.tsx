import { hot } from 'react-hot-loader';

import { App as AppCore } from './App.core';

const App = hot(module)(AppCore);

export {
  App,
};
