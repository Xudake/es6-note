let {foo:baz} = {foo: 'hahaha'};
console.log(baz);

let obj = {first: 'hello',last: 'world'};
let {first:f,last: l} = obj;

console.log(f,l);