// src/main.js

import {version} from "./../package.json";
import _ from "lodash-es";
import {add} from "lodash";
import answer from "the-answer";
import ("./foo").then(msg=>{
  console.log(msg)
})
console.log(version);
console.log(_.add(1,2))
console.log(add(3,4))
console.log(answer);
export function fn1 () {
	console.log("fn1");
}
export const fn2 = ()=>{
  console.log('fn2')
}

