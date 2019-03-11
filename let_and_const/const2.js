"use strict";
const foo = Object.freeze({});

// foo.name = 'xk'; //TypeError: Cannot add property name, object is not extensible

console.log(foo);

const bar = {};

bar.name = 'xk';

console.log(bar);