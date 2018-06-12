//tslint:disable-next-line: no-console
console.log(process.env.NODE_ENV);

const config = {
  //tslint:disable-next-line: strict-type-predicates
  isBrowser: typeof window !== 'undefined',
  isProduction: process.env.NODE_ENV === 'production',
};
export { config };
