import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

export default {
  plugins: [
    eslint({
      exclude: ['node_modules/**'],
      include: ['src/**']
    }),
    json(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    resolve(),
    commonjs()
  ]
}
