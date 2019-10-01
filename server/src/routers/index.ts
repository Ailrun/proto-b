import { createRouter as createGithub } from './github';

type attachRoutersDeps = {
  readonly express: typeof import('express');
  readonly app: import('express').Express;
  readonly environment: Environment;
};
const attachRouters = ({
  express: { Router },
  app,
  environment,
}: attachRoutersDeps) => {
  const github = createGithub({
    Router,
    environment,
  });

  app.use('/github', github);
};

export {
  attachRouters,
  attachRoutersDeps,
};
