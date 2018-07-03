import { storiesOf } from '@storybook/react';
import React from 'react';

import { App as App } from '~src/react/App.core';

storiesOf('App.core', module)
  .add('default', () => {
    return (
      <App />
    );
  });
