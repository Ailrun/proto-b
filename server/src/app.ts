import process from 'process';
import express from 'express';

import { getEnvironment } from './environment';
import { attachRouters } from './routers';

const environment = getEnvironment({
  process,
});
const app = express();
attachRouters({
  express,
  app,
  environment,
});

export {
  app,
};
