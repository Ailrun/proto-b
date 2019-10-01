import React, { Component } from 'react';

import { GitHubLoginButton } from './GitHubLoginButton.core';

/**
 * The root of whole app
 */
class App extends Component {
  public render() {
    return (
      <>
        <div>Hello World!</div>
        <GitHubLoginButton />
      </>
    );
  }
}

export {
  App,
};
