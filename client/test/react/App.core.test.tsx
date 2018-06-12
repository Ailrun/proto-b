import React from 'react';
import { render } from 'react-testing-library';

import { App } from '~src/react/App.core';

describe('App.core', () => {
  it('should be renderable', () => {
    const rendered = render(<App />);

    expect(rendered.container).toMatchSnapshot();
  });
});
