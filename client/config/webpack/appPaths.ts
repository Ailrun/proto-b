import path from 'path';

const projectRoot = path.join(__dirname, '../../');

export default {
  publicDirectory: path.join(projectRoot, 'public'),
  srcDirectory: path.join(projectRoot, 'src'),

  index: path.join(projectRoot, 'src/index.tsx'),
  polyfills: path.join(projectRoot, 'config/polyfills/index.js'),
  pugTemplate: path.join(projectRoot, 'template/index.pug'),
  tsconfigDevJson: path.join(projectRoot, 'config/tsconfig/tsconfig.dev.json'),
  tsconfigProdJson: path.join(projectRoot, 'config/tsconfig/tsconfig.prod.json'),
};
