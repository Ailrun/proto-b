import { createOauthHandler } from './oauth';

type createRouterDeps = {
  readonly Router: typeof import('express').Router;
  readonly environment: Environment;
}
const createRouter = ({
  Router,
  environment,
}: createRouterDeps) => {
  const router = Router();
  const oauthHandler = createOauthHandler({
    environment,
  });
  router.use('/oauth', oauthHandler);

  return router;
};

export {
  createRouter,
  createRouterDeps,
};
