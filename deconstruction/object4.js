// let {foo: {bar}} = {baz: 'baz'}
// console.log(bar);// Cannot destructure property `bar` of 'undefined' or 'null'.

let x;
// {x} = {x:1}
({x} = {x:1})
console.log(x);