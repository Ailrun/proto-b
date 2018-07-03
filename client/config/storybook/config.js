import { configure, addDecorator } from '@storybook/react';
import React from 'react';

const req = require.context('../../src/react/stories', true, /\.story\.tsx?$/);
const loadStories = () => {
  req.keys().forEach((filename) => req(filename));
};

configure(loadStories, module);
