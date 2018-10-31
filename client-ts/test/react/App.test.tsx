import React from 'react';
import { render } from 'react-testing-library';

import { App } from '~src/react/App';

describe('App', () => {
  it('should be renderable', () => {
    const rendered = render(<App />);

    expect(rendered.container).toMatchSnapshot();
  });
});
