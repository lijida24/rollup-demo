import { name } from '../package.json'

export default {
  dev: {
    input: 'src/index.js',
    output: {
      file: 'dist/' + name + '.js',
      format: 'umd',
      name: 'rollupDemo'
    }
  },
  prod: {
    input: 'src/index.js',
    output: {
      file: 'dist/' + name + '.min.js',
      format: 'umd',
      name: 'rollupDemo'
    }
  }
}
