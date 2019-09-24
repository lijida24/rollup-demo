process.env.NODE_ENV = 'development';

import serve from 'rollup-plugin-serve';
import baseConfig from './rollup.config';
import config from './config'
import merge from './merge'

const PORT = 3000;
const devSite = `http://127.0.0.1:${PORT}`;
const devPath = 'example/index.html';
const devUrl = `${devSite}/${devPath}`;

setTimeout(()=>{
  console.log(`[dev]: ${devUrl}`)
}, 1000);

const devConfig = {
  output: {
    sourcemap: false
  },
  plugins: [
    serve({
      port: PORT,
      contentBase: []
    })
  ]
}

export default merge(baseConfig, config.dev, devConfig)
