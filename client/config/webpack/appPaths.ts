/// <reference types="node" />

import path from 'path';

const projectRoot = path.join(__dirname, '../../');
const pathFromRoot = (...pathes: Array<string>) => path.join(projectRoot, ...pathes);

export default {
  publicDirectory: pathFromRoot('public'),
  srcDirectory: pathFromRoot('src'),
  nodeModulesDirectory: pathFromRoot('node_modules'),

  index: pathFromRoot('src', 'index.ts'),
  polyfills: pathFromRoot('config', 'polyfills', 'index.js'),
  pugTemplate: pathFromRoot('template', 'index.pug'),
  tsconfigDevJson: pathFromRoot('config', 'tsconfig', 'tsconfig.dev.json'),
  tsconfigProdJson: pathFromRoot('config', 'tsconfig', 'tsconfig.prod.json'),
};
