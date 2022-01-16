const express = require('express');
const webpack = require('webpack');

const app = express();

const config = require('./webpack.config.js');

const port = process.env.PORT || 5000;

const env = {
  /**
   * Webpack environment variables
   */
  production: false,
};

const log = (message) =>
  console.log(`[${new Date().toLocaleTimeString()}] ${message}`);

app.use(express.static('./dist'));

app.listen(port, () => {
  console.log('====================================================');
  console.log(`🚀 Development server running`);
  console.log(`🌐 Open your browser at http://localhost:${port}`);
  console.log('====================================================');

  const compiler = webpack(config(env));

  compiler.hooks.compile.tap('OnCompile', () => {
    log('Compiling... 🛠️');
  });

  log('👀 Starting compiler in watch mode');

  compiler.watch({}, (err, result) => {
    if (result.hasErrors()) {
      log('Compilation failed! ❌');
      console.error(err.message);
    } else {
      log('Done! ✔️\n');
    }
  });
});
