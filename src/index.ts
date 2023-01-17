import { hey } from './helper.js'; // helper is a ESModule, it needs the js extension but file has ts

import yo from './utils.cjs'; // utils is a CommonJS module, it needs the cjs extension but file has cts

import fs from 'fs'; // node libs has no extension

console.log(hey);
console.log(yo);
