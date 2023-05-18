
/**
 * import异步导入的模块会被分包
 */
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from "@rollup/plugin-babel";
export default [
  {
    input:'src/main.js',
    output:{
      dir:'./dist',//有多个输出时必须配置
      // file: 'bundle.js',
      format: 'cjs'//输出的类型 cjs:node module
    },
    plugins: [
      json(),//处理json文件
      resolve(),//处理第三方外部模块,只能处理es module
      commonjs(),//处理common module模块
      babel()//babel将es6代码转换es5
    ],
    // external: ["the-answer"],
  },
  {
    input:'src/main2.js',
    output:{
      
      file:'./dist/boundle-main2.js',
      format: 'cjs'//输出的类型 cjs:node module
    }
  }
]