process.env.NODE_ENV = 'production';

import { uglify } from 'rollup-plugin-uglify';
import baseConfig from './rollup.config';
import config from './config'
import merge from './merge';

const prodConfig = {
  output: {
    sourcemap: false
  },
  plugins: [
    uglify()
  ]
}

export default merge(baseConfig, config.prod, prodConfig)
