/// <reference types="node" />
/// <reference path="./globals.d.ts" />

type getEnvironmentDeps = {
  readonly process: typeof import('process');
}

const getEnvironment = ({
  process,
}: getEnvironmentDeps): Environment => {
  const GITHUB_CLIENT_SECRET =
    process.env.GITHUB_CLIENT_SECRET;

  if (GITHUB_CLIENT_SECRET === undefined) {
    throw new TypeError('Environment variable GITHUB_CLIENT_SECRET is undefined.');
  }

  return {
    GITHUB_CLIENT_SECRET,
  };
};

export {
  getEnvironment,
  getEnvironmentDeps,
};
