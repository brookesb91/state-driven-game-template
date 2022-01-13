const express = require('express');
const webpack = require('webpack');

const app = express();

const config = require('./webpack.config.js');

const port = process.env.PORT || 5000;

app.use(express.static('./dist'));

app.listen(port, () => {
  console.log('====================================================');
  console.log(`🚀 Development server running`);
  console.log(`🌐 Open your browser at http://localhost:${port}`);
  console.log('====================================================');

  const compiler = webpack(config);

  compiler.hooks.compile.tap('LogCompile', () => {
    console.log('Compiling... 🛠️');
  });

  console.log('👀 Starting compiler in watch mode');
  compiler.watch({}, (err, result) => {
    console.log('Done! ✔️\n');
  });
});
