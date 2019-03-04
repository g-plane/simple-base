/* eslint-disable import/no-extraneous-dependencies */
import typescript from 'rollup-plugin-typescript2'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/simple-base.js',
    format: 'umd',
  },
  name: 'SimpleBase',
  plugins: [
    typescript(),
    uglify(),
  ],
}
