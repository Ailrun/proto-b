enum Environment {
  TEST = 'TEST',
  DEVELOPMENT = 'DEVELOPMENT',
  PRODUCTION = 'PRODUCTION',
}

function getEnvironment(): Environment {
  /* istanbul ignore else: we cannot test else case*/
  if (process.env.NODE_ENV === 'test') {
    return Environment.TEST;
  }

  /* istanbul ignore next: we cannot test else case*/
  //tslint:disable-next-line: strict-type-predicates
  if (typeof window === 'undefined' || !(window instanceof Window)) {
    throw new Error(`Illegal environment. Following environment is detected, but there is no window: ${process.env.NODE_ENV}`);
  }

  /* istanbul ignore next: we cannot test else case*/
  if (process.env.NODE_ENV === 'production') {
    return Environment.PRODUCTION;
  }

  /* istanbul ignore next: we cannot test else case*/
  if (process.env.NODE_ENV === 'development') {
    return Environment.DEVELOPMENT;
  }

  /* istanbul ignore next: we cannot test else case*/
  throw new Error(`Illegal environment. Following environment is detected: ${process.env.NODE_ENV}`);
}

const config = {
  environment: getEnvironment(),
};
export {
  Environment,
  config,
};
