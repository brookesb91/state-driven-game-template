const webpack = require('webpack');
const path = require('path');
const PathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './src/main.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      plugins: [new PathsPlugin({})],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          'src/index.html',
          'src/manifest.webmanifest',
          'src/service-worker.js',
          { from: 'src/assets/', to: 'assets' },
          { from: 'src/icons/', to: 'icons' },
        ],
      }),
      ...(env.production
        ? [
            new webpack.NormalModuleReplacementPlugin(
              /src\/env\/environment\/environment\.ts/,
              'src/env/environment/environment.prod.ts'
            ),
          ]
        : []),
    ],
    watchOptions: {
      ignored: ['dist/', '/node_modules/'],
    },
  };
};
