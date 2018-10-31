/// <reference types="node" />
/// <reference types="webpack-dev-server" />

import fs from 'fs';
import process from 'process';

import 'dotenv/config';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

import babelConfig from '../babel/babelrc';
import appPaths from './appPaths';

const isCI = process.env.CI;

function webpackConfig(_env: string | undefined, { mode }: webpack.Configuration): webpack.Configuration {
  const isProduction = mode === 'production';

  return {
    mode,

    entry: {
      index: [
        appPaths.polyfills,
        appPaths.index,
      ],
    },

    module: {
      rules: [{
        test: /.tsx?$/,
        exclude: [
          appPaths.nodeModulesDirectory,
        ],
        use: [{
          loader: 'babel-loader',
          options: babelConfig,
        }, {
          loader: 'ts-loader',
          options: {
            configFile: isProduction ?
              appPaths.tsconfigProdJson :
              appPaths.tsconfigDevJson,
            transpileOnly: true,
          },
        }],
      }, {
        test: /.pug$/,
        exclude: [
          appPaths.nodeModulesDirectory,
        ],
        use: [{
          loader: 'pug-loader',
        }],
      }],
    },

    resolve: {
      alias: {
        '~src': appPaths.srcDirectory,
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    },

    stats: {
      assets: true,
      assetsSort: undefined,
      cached: true,
    },

    devServer: isProduction ? undefined : {
      clientLogLevel: 'none',
      compress: true,
      contentBase: [
        appPaths.publicDirectory,
      ],
      historyApiFallback: true,
      hot: true,
      hotOnly: true,
      https: !isCI && {
        key: fs.readFileSync(process.env.https_key!),
        cert: fs.readFileSync(process.env.https_cert!),
        ca: fs.readFileSync(process.env.https_ca!),
      },
      port: 4128,
    },

    plugins: [
      new HtmlWebpackPlugin({
        inject: true,
        template: appPaths.pugTemplate,
      })
    ].concat(isProduction ? [
    ] : [
      new webpack.HotModuleReplacementPlugin(),
    ]),
  };
}
export default webpackConfig;
