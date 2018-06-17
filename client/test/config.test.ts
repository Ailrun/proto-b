import { Environment, config } from '~src/config';

describe('config', () => {
  it(`should have environment of ${Environment.TEST} in testing enviroment`, () => {
    expect(config).toHaveProperty('environment', Environment.TEST);
  });
});
